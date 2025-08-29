import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function HeroMinimal() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            className="space-y-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] sm:leading-[0.9]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I Create 
              </motion.span>
              <motion.span
                className="block text-primary"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                standout digital
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                experiences
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Independent digital creator focused on design, development and 
            creative solutions that push boundaries and deliver exceptional results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="#work"
              className="btn-minimal px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wide font-medium w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Selected Work
            </motion.a>
            <motion.a
              href="#contact"
              className="text-xs sm:text-sm uppercase tracking-wide font-medium hover-underline"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              Get In Touch →
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Floating Element - Hidden on mobile */}
      <motion.div
        ref={heroRef}
        className="absolute top-1/2 right-4 sm:right-10 w-px h-24 sm:h-32 bg-border opacity-30 hidden sm:block"
        initial={{ height: 0 }}
        animate={{ height: 128 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        style={{ willChange: 'transform' }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center mx-auto w-fit"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="w-px h-12 bg-muted-foreground mb-2"
          animate={{ height: [48, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-mono text-xs text-muted-foreground">scroll</span>
      </motion.div>
    </section>
  );
}