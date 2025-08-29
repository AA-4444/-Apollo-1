import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function ContactMinimal() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  const contactInfo = [
    {
      label: 'Email',
      value: 'hello@studio.com',
      href: 'mailto:hello@studio.com'
    },
    {
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      label: 'Location',
      value: 'New York, NY',
      href: '#'
    }
  ];

  const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Dribbble', href: '#' }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <motion.div
                className="text-mono text-xs uppercase tracking-widest text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let's Connect
              </motion.div>
              
              <motion.h2
                className="heading-large text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Ready to start
                <br />
                <span className="text-primary">your project?</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-body text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Let's discuss your vision and create something extraordinary together. 
              We're always excited to work on new challenges.
            </motion.p>

            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.0 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  <div className="text-mono text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    {contact.label}
                  </div>
                  <a
                    href={contact.href}
                    className="text-body text-lg hover-underline group-hover:translate-x-2 transition-transform duration-300 inline-block"
                  >
                    {contact.value}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Follow Us
              </div>
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-mono text-sm text-muted-foreground hover:text-foreground hover-underline transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.6 + index * 0.1 
                    }}
                    whileHover={{ y: -2 }}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="space-y-6">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div>
                  <label className="text-mono text-xs uppercase tracking-wide text-muted-foreground block mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-body transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="text-mono text-xs uppercase tracking-wide text-muted-foreground block mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-body transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <label className="text-mono text-xs uppercase tracking-wide text-muted-foreground block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-body transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <label className="text-mono text-xs uppercase tracking-wide text-muted-foreground block mb-3">
                  Project Type
                </label>
                <select className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-body transition-colors duration-300">
                  <option value="">Select project type</option>
                  <option value="web">Web Development</option>
                  <option value="branding">Branding</option>
                  <option value="design">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <label className="text-mono text-xs uppercase tracking-wide text-muted-foreground block mb-3">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-body transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                  <motion.button
                  type="submit"
                  className="btn-minimal px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wide font-medium w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}