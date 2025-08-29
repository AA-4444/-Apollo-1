import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function AboutMinimal() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
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
                About Me
              </motion.div>
              
              <motion.h2
                className="heading-large text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Crafting digital
                <br />
                <span className="text-primary">experiences</span>
                <br />
                since 2022
              </motion.h2>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <motion.p
                className="text-body text-base sm:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I’m an independent creator focused on building thoughtful digital products. 
                I combine design, engineering, and research to push boundaries and deliver polished results.
              </motion.p>
              
              <motion.p
                className="text-body text-base sm:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                From concept to launch, I handle strategy, UX/UI, and code—keeping communication simple and the quality bar high.
              </motion.p>
            </div>

            {/* Services */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                What I Do
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  'iOS Development',
                  'Web Development',
                  'AI Integration',
                  'Chat bots',
                  'UI/UX Design',
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    className="text-body text-foreground py-2 border-b border-border/50 hover-underline cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.2 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
