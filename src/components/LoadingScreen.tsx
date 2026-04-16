import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete: () => void;
}

const codeLines = [
  '> initializing portfolio...',
  '> loading components...',
  '> connecting modules...',
  '> optimizing experience...',
  '> READY ✓',
];

export default function LoadingScreen({ isLoading, onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const duration = 2800;
    const intervalTime = 18;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const t = currentStep / steps;
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const currentProgress = Math.min(eased * 100, 100);
      setProgress(currentProgress);

      const newLineIndex = Math.min(Math.floor((currentProgress / 100) * codeLines.length), codeLines.length - 1);
      setLineIndex(newLineIndex);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 600);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'hsl(220, 30%, 4%)' }}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(8px)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

          {/* Glow orbs */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo ring */}
            <div className="relative w-36 h-36 flex items-center justify-center mb-10">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '1px solid rgba(99,102,241,0.2)', borderTopColor: '#6366f1' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />
              {/* Middle ring */}
              <motion.div
                className="absolute inset-3 rounded-full"
                style={{ border: '1px dashed rgba(168,85,247,0.15)', borderBottomColor: '#a855f7' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              />

              {/* SVG Progress circle */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                <circle cx="50%" cy="50%" r="44%" fill="none" stroke="rgba(99,102,241,0.1)" strokeWidth="2" />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  fill="none"
                  stroke="url(#progressGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="276"
                  strokeDashoffset={276 - (progress / 100) * 276}
                  style={{ filter: 'drop-shadow(0 0 6px rgba(99,102,241,0.8))' }}
                />
                <defs>
                  <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center initials */}
              <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div
                  className="text-3xl font-black tracking-tighter"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: 'none',
                  }}
                >
                  SPD
                </div>
                <div
                  className="text-[10px] text-white/30 tracking-widest uppercase mt-0.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Portfolio
                </div>
              </motion.div>
            </div>

            {/* Progress percentage */}
            <div className="mb-4 overflow-hidden h-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={Math.round(progress)}
                  className="text-3xl font-black text-white/80"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {Math.round(progress)}<span className="text-xl text-indigo-500/60">%</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Code lines */}
            <div className="w-64 space-y-1">
              {codeLines.slice(0, lineIndex + 1).map((line, i) => (
                <motion.div
                  key={i}
                  className="text-xs text-left"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: i === lineIndex ? '#818cf8' : 'rgba(255,255,255,0.2)',
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {line}
                  {i === lineIndex && <span className="inline-block w-1.5 h-3.5 bg-indigo-400 ml-1 cursor-blink" style={{ verticalAlign: 'middle' }} />}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
