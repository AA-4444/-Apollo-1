import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'iOS Development',
    category: 'Mobile Applications',
    description: 'Design and development of high-performance iOS applications using Swift and SwiftUI. I focus on delivering seamless user experiences, intuitive interfaces, and scalable architectures ready for real-world use.',
    image: '/placeholder.svg',
    year: 'Service',
    technologies: ['Swift', 'SwiftUI', 'Xcode', 'Firebase']
  },
  {
    id: '02',
    title: 'Web Development',
    category: 'Web Platforms',
    description: 'Building modern, fast, and scalable websites and web apps. From landing pages to complex platforms, I ensure clean code, responsive design, and smooth performance.',
    image: '/placeholder.svg',
    year: 'Service',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript']
  },
  {
    id: '03',
    title: 'AI Integration',
    category: 'Intelligent Systems',
    description: 'Integrating artificial intelligence into products and services to create smarter, adaptive solutions. From machine learning features to AI-driven personalization, I bring innovation directly into digital experiences.',
    image: '/placeholder.svg',
    year: 'Service',
    technologies: ['OpenAI API', 'TensorFlow', 'Python', 'Node.js']
  },
  {
    id: '04',
    title: 'Chat Bots',
    category: 'Conversational Interfaces',
    description: 'Designing and developing intelligent chatbots for web and mobile platforms. Focused on natural interactions, automation, and integrating seamlessly with existing workflows.',
    image: '/placeholder.svg',
    year: 'Service',
    technologies: ['Dialogflow', 'OpenAI', 'Node.js', 'React']
  },
  {
    id: '05',
    title: 'UI/UX Design',
    category: 'User Experience',
    description: 'Crafting clear, user-centered designs that balance usability and aesthetics. From wireframes and prototypes to polished interfaces that elevate the product experience.',
    image: '/placeholder.svg',
    year: 'Service',
    technologies: ['Figma', 'Framer', 'Adobe XD', 'Prototyping']
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.article
      ref={cardRef}
      className="border-b border-border last:border-b-0"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      <div className="py-12 sm:py-16 md:py-24 group cursor-pointer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Project Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-baseline gap-6">
              <span className="text-mono text-xs text-muted-foreground">
                {project.id}
              </span>
              <span className="text-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>
            
            <div>
              <motion.h3
                className="heading-large text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 group-hover:translate-x-2 lg:group-hover:translate-x-4 transition-transform duration-700 leading-tight"
                style={{ y }}
              >
                {project.title}
              </motion.h3>
              <p className="text-mono text-xs sm:text-sm text-primary uppercase tracking-wide">
                {project.category}
              </p>
            </div>
            
            <p className="text-body text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="text-mono text-xs text-muted-foreground border border-border/50 px-2 sm:px-3 py-1 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project Image */}
          <div className="lg:col-span-5 order-first lg:order-last">
            <motion.div
              className="aspect-[4/3] bg-muted rounded-sm overflow-hidden group-hover:scale-105 transition-transform duration-700"
              style={{ y }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Hover Arrow */}
        <motion.div
          className="flex items-center justify-end mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ x: -20 }}
          whileHover={{ x: 0 }}
        >
          <span className="text-mono text-xs uppercase tracking-wide mr-4">
            View Details
          </span>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="group-hover:translate-x-2 transition-transform duration-300"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function WorkMinimal() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="work" ref={sectionRef} className="py-16 sm:py-24 lg:py-32">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            My Services
          </div>
          <h2 className="heading-large text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[0.9]">
            Areas where I
            <br />
            <span className="text-primary">bring value</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* View All Work */}
        <motion.div
          className="flex justify-center pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="#"
            className="btn-minimal px-8 py-4 text-sm uppercase tracking-wide font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}