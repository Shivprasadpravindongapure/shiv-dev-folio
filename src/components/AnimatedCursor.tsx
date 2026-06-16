import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useSpring(-100, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28 });
  const cursorXOuter = useSpring(-100, { stiffness: 150, damping: 20 });
  const cursorYOuter = useSpring(-100, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      cursorXOuter.set(e.clientX - 16);
      cursorYOuter.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, cursorXOuter, cursorYOuter]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Outer Ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/40 rounded-full mix-blend-difference pointer-events-none z-[9998]"
        style={{
          x: cursorXOuter,
          y: cursorYOuter,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.2 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default AnimatedCursor;
