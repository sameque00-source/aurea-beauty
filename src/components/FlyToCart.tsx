import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import productImg from '@assets/image_1785083516587.png';

interface FlyItemProps {
  flyId: string;
  startX: number;
  startY: number;
}

function FlyItem({ flyId, startX, startY }: FlyItemProps) {
  const { cartIconRef, completeFly } = useCart();
  const [targetPos, setTargetPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (cartIconRef.current) {
      const rect = cartIconRef.current.getBoundingClientRect();
      setTargetPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, [cartIconRef]);

  if (!targetPos) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        originX: 0.5,
        originY: 0.5,
      }}
      initial={{
        x: startX - 40,
        y: startY - 40,
        width: 80,
        height: 80,
        opacity: 1,
        scale: 1,
        borderRadius: '50%',
      }}
      animate={{
        x: targetPos.x - 16,
        y: targetPos.y - 16,
        width: 32,
        height: 32,
        opacity: 0,
        scale: 0.3,
      }}
      transition={{
        duration: 0.75,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onAnimationComplete={() => completeFly(flyId)}
    >
      <img
        src={productImg}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '50%',
          background: '#F5EFE9',
        }}
      />
    </motion.div>
  );
}

export function FlyToCartLayer() {
  const { flyAnimations } = useCart();

  return (
    <>
      {flyAnimations.map(fly => (
        <FlyItem
          key={fly.id}
          flyId={fly.id}
          startX={fly.startX}
          startY={fly.startY}
        />
      ))}
    </>
  );
}
