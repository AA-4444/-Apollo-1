import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on links
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'home', href: '#hero' },
    { label: 'about', href: '#about' },
    { label: 'work', href: '#work' },
    { label: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-custom py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-lg font-medium tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            portfolio
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="nav-link text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: -2 }}
              >
                <span className="text-mono">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Menu Toggle for Mobile */}
          <div className="md:hidden">
            <motion.button 
              className="text-foreground relative z-50 w-10 h-10 flex items-center justify-center mr-5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center"
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="w-6 h-px bg-current block"
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: 45, y: 2, opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-px bg-current block mt-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-px bg-current block mt-1"
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: -45, y: -8, opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="text-center space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1 + 0.2,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    <a
                      href={item.href}
                      className="block text-3xl font-light text-foreground hover:text-primary transition-colors duration-300"
                      onClick={handleLinkClick}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
              
              {/* Mobile Menu Footer */}
              <motion.div
                className="absolute bottom-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-mono text-xs text-muted-foreground">
                  Ready to collaborate?
                </p>
                <a
                  href="#contact"
                  className="text-mono text-sm text-primary hover:text-foreground transition-colors duration-300 mt-2 block"
                  onClick={handleLinkClick}
                >
                  Get in touch →
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}