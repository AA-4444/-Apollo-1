import { motion } from 'framer-motion';

export function FooterMinimal() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 sm:py-16">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-lg font-medium tracking-tight">
              portfolio
            </div>
            <p className="text-body text-sm text-muted-foreground max-w-xs leading-relaxed">
              Creative studio focused on award-winning digital experiences 
              and innovative design solutions.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
              Navigation
            </div>
            <div className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Work', href: '#work' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-body text-sm text-muted-foreground hover:text-foreground hover-underline transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
              Connect
            </div>
            <div className="space-y-3">
              {[
                { label: 'Instagram', href: '#' },
                { label: 'Twitter', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Dribbble', href: '#' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="block text-body text-sm text-muted-foreground hover:text-foreground hover-underline transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-mono text-xs text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}