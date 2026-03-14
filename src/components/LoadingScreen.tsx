import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete: () => void;
}

const LoadingScreen = ({ isLoading, onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING EXECUTABLE');

  useEffect(() => {
    if (!isLoading) return;
    
    const duration = 2500;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    // Loading Text Sequence
    const texts = [
      'SYSTEM BOOT...',
      'LOADING ASSETS...',
      'ESTABLISHING CONNECTION...',
      'OPTIMIZING EXPERIENCE...',
      'READY.'
    ];

    const timer = setInterval(() => {
      currentStep++;
      
      // Dynamic easing for a more "powerful" feel (starts slow, bursts, then eases)
      const t = currentStep / steps;
      const easedProgress = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      const currentProgress = Math.min(easedProgress * 100, 100);
      setProgress(currentProgress);
      
      // Update text based on progress
      const textIndex = Math.min(
        Math.floor((currentProgress / 100) * texts.length),
        texts.length - 1
      );
      setLoadingText(texts[textIndex]);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Let the "READY" state linger for 0.5s
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-auto overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Animated Background Gradients */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[80px]" style={{ mixBlendMode: 'screen' }} />
          </motion.div>

          {/* Central Loader Construction */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center z-10">
            {/* Outer Rotating Ring */}
            <motion.div 
              className="absolute inset-0 border-2 border-indigo-500/20 rounded-full border-t-indigo-500/80 border-b-purple-500/80"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner Counter-Rotating Ring */}
            <motion.div 
              className="absolute inset-4 border border-dashed border-white/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Core Glow */}
            <motion.div 
              className="absolute inset-12 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full backdrop-blur-md border border-white/5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Logo/Initials Reveal */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="text-5xl md:text-6xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-purple-400"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                  >
                    SPD
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Circular Progress Indicator */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-indigo-500/20"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                strokeDasharray="300"
                strokeDashoffset={300 - (progress / 100) * 300}
              />
            </svg>
          </div>

          {/* Typography & Status Container */}
          <div className="mt-12 flex flex-col items-center gap-4 z-10 w-64 md:w-80">
            {/* Percentage Display */}
            <div className="overflow-hidden h-12">
              <motion.div 
                className="text-4xl font-heading font-light tracking-widest text-white/90"
                key={Math.round(progress)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {Math.round(progress)}<span className="text-indigo-500/70 text-2xl">%</span>
              </motion.div>
            </div>

            {/* Dynamic Status Text */}
            <div className="h-4 overflow-hidden mt-2">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={loadingText}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-xs font-mono font-medium tracking-[0.3em] text-indigo-300/80 uppercase"
                >
                  {loadingText}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
