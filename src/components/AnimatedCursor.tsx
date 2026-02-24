import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setCursorVariant('click');
    const handleMouseUp = () => setCursorVariant('default');
    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(148, 163, 184, 0.3)',
      mixBlendMode: 'difference' as const,
      transition: {
        type: 'spring',
        mass: 0.5,
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: 'rgba(203, 213, 225, 0.4)',
      mixBlendMode: 'difference' as const,
      transition: {
        type: 'spring',
        mass: 0.5,
        stiffness: 100,
        damping: 10,
      },
    },
    click: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: 'rgba(241, 245, 249, 0.5)',
      mixBlendMode: 'difference' as const,
      transition: {
        type: 'spring',
        mass: 0.5,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 hidden lg:block"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-slate-400/50 pointer-events-none z-50 hidden lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 800,
          damping: 25,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
