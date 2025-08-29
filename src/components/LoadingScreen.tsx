import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    'Loading experience...',
    'Crafting interactions...',
    'Preparing portfolio...',
    'Almost ready...'
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 100;
    const stepDuration = duration / steps;
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      // Change text at different progress points
      if (currentProgress === 25) setCurrentText(1);
      else if (currentProgress === 50) setCurrentText(2);
      else if (currentProgress === 75) setCurrentText(3);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center max-w-md mx-auto px-6">
          {/* Logo/Title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="heading-display text-2xl sm:text-3xl text-foreground">
              Studio
            </h1>
            <div className="w-8 h-px bg-primary mx-auto mt-4" />
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="mb-8 h-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentText}
                className="text-mono text-xs uppercase tracking-widest text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {loadingTexts[currentText]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="relative w-full max-w-xs mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {/* Background Bar */}
            <div className="h-px bg-border w-full" />
            
            {/* Progress Fill */}
            <motion.div
              className="absolute top-0 left-0 h-px bg-primary origin-left"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
            
            {/* Progress Dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full"
              style={{ left: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </motion.div>

          {/* Progress Number */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <span className="text-mono text-xs text-muted-foreground tabular-nums">
              {progress.toString().padStart(2, '0')}%
            </span>
          </motion.div>
        </div>

        {/* Subtle Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
          transition={{ duration: 2 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}