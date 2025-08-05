import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--hero-gradient-overlay)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building{" "}
            <span className="bg-gradient-to-r from-tertiary to-tertiary-light bg-clip-text text-transparent">
              Hope
            </span>
            <br />
            Creating{" "}
            <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">
              Change
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join us in transforming communities through education, sustainable development, 
            and empowerment. Together, we can create lasting positive change.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="btn-hero group">
              Start Volunteering
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button className="btn-secondary-hero group">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </motion.div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <StatCard number="50K+" label="Lives Impacted" delay={0.9} />
          <StatCard number="200+" label="Projects Completed" delay={1.0} />
          <StatCard number="1.2K+" label="Active Volunteers" delay={1.1} />
          <StatCard number="25+" label="Countries Served" delay={1.2} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

const StatCard = ({ number, label, delay }: { number: string; label: string; delay: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-3xl md:text-4xl font-bold text-tertiary mb-2 animate-counter">
        {number}
      </div>
      <div className="text-white/80 text-sm md:text-base font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export default Hero;