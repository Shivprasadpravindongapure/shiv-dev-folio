import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      if (dotRef.current) { dotRef.current.style.width = '12px'; dotRef.current.style.height = '12px'; dotRef.current.style.background = 'var(--accent)'; }
      if (ringRef.current) { ringRef.current.style.width = '48px'; ringRef.current.style.height = '48px'; ringRef.current.style.borderColor = 'rgba(99,102,241,0.6)'; }
    };

    const onLeaveLink = () => {
      if (dotRef.current) { dotRef.current.style.width = '8px'; dotRef.current.style.height = '8px'; dotRef.current.style.background = 'var(--primary)'; }
      if (ringRef.current) { ringRef.current.style.width = '32px'; ringRef.current.style.height = '32px'; ringRef.current.style.borderColor = 'rgba(139,92,246,0.5)'; }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(l => { l.addEventListener('mouseenter', onEnterLink); l.addEventListener('mouseleave', onLeaveLink); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ pointerEvents: 'none' }} />
      <div ref={ringRef} className="cursor-ring" style={{ pointerEvents: 'none' }} />
    </>
  );
}
