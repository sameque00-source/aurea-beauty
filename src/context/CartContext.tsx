import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import productImg from '@assets/image_1785083516587.png';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface FlyAnimation {
  id: string;
  startX: number;
  startY: number;
}

interface CartContextType {
  items: CartItem[];
  count: number;
  isDrawerOpen: boolean;
  cartIconRef: React.RefObject<HTMLButtonElement | null>;
  flyAnimations: FlyAnimation[];
  /** Always increments quantity. Triggers fly animation if sourceRect provided. */
  addToCart: (sourceRect?: DOMRect | null) => void;
  updateQuantity: (id: string, quantity: number) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  completeFly: (flyId: string) => void;
  cartBounce: boolean;
}

const CART_KEY = 'aurea_cart_v2';

const PRODUCT_TEMPLATE: Omit<CartItem, 'quantity'> = {
  id: 'escova-alisadora-aurea',
  name: 'Escova Alisadora Elétrica 5 em 1',
  price: 129.90,
  image: productImg,
};

function readStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    // Always restore the current (hashed) image path
    return parsed.map(item => ({ ...item, image: productImg }));
  } catch {
    return [];
  }
}

function writeStorage(items: CartItem[]) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch { /* quota exceeded – ignore */ }
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItemsRaw] = useState<CartItem[]>(readStorage);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [flyAnimations, setFlyAnimations] = useState<FlyAnimation[]>([]);
  const [cartBounce, setCartBounce] = useState(false);
  const cartIconRef = useRef<HTMLButtonElement | null>(null);

  // Wrap setItems so persistence is always in sync
  const setItems = useCallback((updater: CartItem[] | ((prev: CartItem[]) => CartItem[])) => {
    setItemsRaw(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      writeStorage(next);
      return next;
    });
  }, []);

  // Re-sync from localStorage when the page is restored from bfcache
  // (e.g. user goes to checkout URL and presses Back)
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        // page was restored from bfcache — re-read storage
        setItemsRaw(readStorage());
      }
    };
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const triggerBounce = useCallback(() => {
    setCartBounce(true);
    setTimeout(() => setCartBounce(false), 600);
  }, []);

  // Always increments — every CTA click adds 1 unit
  const addToCart = useCallback((sourceRect?: DOMRect | null) => {
    const hasFlySource = sourceRect && cartIconRef.current;

    if (hasFlySource) {
      // Queue fly animation; items are updated when animation completes
      const flyId = `fly-${Date.now()}-${Math.random()}`;
      setFlyAnimations(prev => [
        ...prev,
        {
          id: flyId,
          startX: sourceRect!.left + sourceRect!.width / 2,
          startY: sourceRect!.top + sourceRect!.height / 2,
        },
      ]);
    } else {
      // No animation — update immediately
      setItems(prev => {
        const existing = prev.find(i => i.id === PRODUCT_TEMPLATE.id);
        if (existing) {
          return prev.map(i =>
            i.id === PRODUCT_TEMPLATE.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prev, { ...PRODUCT_TEMPLATE, quantity: 1 }];
      });
      triggerBounce();
    }
  }, [setItems, triggerBounce]);

  const completeFly = useCallback((flyId: string) => {
    setFlyAnimations(prev => prev.filter(f => f.id !== flyId));
    // Increment quantity (or add first item) when fly lands
    setItems(prev => {
      const existing = prev.find(i => i.id === PRODUCT_TEMPLATE.id);
      if (existing) {
        return prev.map(i =>
          i.id === PRODUCT_TEMPLATE.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...PRODUCT_TEMPLATE, quantity: 1 }];
    });
    triggerBounce();
  }, [setItems, triggerBounce]);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.id !== id));
    } else {
      setItems(prev => prev.map(i => i.id === id ? { ...i, quantity } : i));
    }
  }, [setItems]);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <CartContext.Provider value={{
      items,
      count,
      isDrawerOpen,
      cartIconRef,
      flyAnimations,
      addToCart,
      updateQuantity,
      openDrawer,
      closeDrawer,
      completeFly,
      cartBounce,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
