import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Immersive 3D Portfolio",
    description: "Award-winning portfolio website featuring interactive 3D elements, smooth animations, and WebGL shaders. Built with Three.js and React.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    tags: ["React", "Three.js", "WebGL", "GSAP"],
    demo: "#",
    github: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience. Performance optimized with 99% lighthouse score.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI-Powered Dashboard",
    description: "Comprehensive analytics dashboard with AI insights, real-time data visualization, and interactive charts. Built for enterprise clients.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Python", "TensorFlow"],
    demo: "#",
    github: "#"
  },
  {
    title: "Virtual Reality Showcase",
    description: "Web-based VR experience showcasing architectural designs in immersive 3D environments. Compatible with VR headsets and mobile devices.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop",
    tags: ["A-Frame", "WebXR", "Three.js", "Blender"],
    demo: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section className="py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work, featuring award-winning websites and innovative digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group glass border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button size="sm" variant="secondary" className="glass">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="glass">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}