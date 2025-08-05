import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, BookOpen, Leaf, Heart } from "lucide-react";
import impactWater from "@/assets/impact-water.jpg";
import impactEducation from "@/assets/impact-education.jpg";
import impactEnvironment from "@/assets/impact-environment.jpg";

const ImpactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const impactAreas = [
    {
      icon: Droplets,
      title: "Clean Water Access",
      description: "Providing clean, safe drinking water to rural communities through sustainable well projects and water purification systems.",
      impact: "15,000+ people served",
      image: impactWater,
      color: "primary",
    },
    {
      icon: BookOpen,
      title: "Education Programs",
      description: "Building schools, training teachers, and providing educational resources to underserved communities worldwide.",
      impact: "500+ schools supported",
      image: impactEducation,
      color: "secondary",
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Implementing renewable energy projects and teaching sustainable farming practices to protect our planet.",
      impact: "200+ green projects",
      image: impactEnvironment,
      color: "tertiary",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Impact{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through dedicated partnerships and community-driven initiatives, we're creating 
            sustainable change that lasts for generations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="impact-card group h-full">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-3 rounded-full bg-${area.color} text-white shadow-lg`}>
                      <area.icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold text-${area.color} bg-${area.color}/10 px-3 py-1 rounded-full`}>
                      {area.impact}
                    </span>
                    <Heart className="h-5 w-5 text-muted-foreground group-hover:text-red-500 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of volunteers who are changing lives every day.
            </p>
            <motion.button 
              className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;