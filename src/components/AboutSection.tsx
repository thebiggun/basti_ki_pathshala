import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Target, Award } from "lucide-react";
import imageSarah from "@/assets/imageSarah.jpg";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Sarah Chen",
      position: "Executive Director",
      experience: "15+ years in international development",
      bio: "Leading global initiatives with a focus on sustainable community development and education.",
      image: imageSarah,
    },
    {
      name: "Dr. James Rodriguez",
      position: "Program Director",
      experience: "12+ years in healthcare & water systems",
      bio: "Specialized in implementing clean water projects and healthcare programs in rural communities.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80",
    },
    {
      name: "Amara Okafor",
      position: "Community Outreach Lead",
      experience: "10+ years in grassroots organizing",
      bio: "Building bridges between communities and creating lasting partnerships for sustainable change.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80",
    },
  ];

  const values = [
    {
      icon: Globe,
      title: "Global Impact",
      description: "We believe in creating positive change that transcends borders and cultures.",
    },
    {
      icon: Users,
      title: "Community-Centered",
      description: "Our approach puts local communities at the heart of every initiative.",
    },
    {
      icon: Target,
      title: "Sustainable Solutions",
      description: "We focus on long-term solutions that communities can maintain independently.",
    },
    {
      icon: Award,
      title: "Transparency",
      description: "We maintain the highest standards of accountability and transparency.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HopeConnect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded in 2015, HopeConnect has been transforming lives through sustainable 
            community development, education, and environmental initiatives. We believe 
            every person deserves access to clean water, quality education, and a sustainable future.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="team-card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower underserved communities worldwide through sustainable development 
                  programs, education initiatives, and environmental conservation projects 
                  that create lasting positive change.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="team-card bg-gradient-to-br from-secondary/5 to-tertiary/5 border-secondary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every community has access to clean water, quality education, 
                  and sustainable livelihood opportunities, creating a foundation for 
                  self-reliant and thriving societies.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="impact-card text-center h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Meet Our Leadership Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              >
                <Card className="team-card group overflow-hidden">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>
                    <Badge variant="secondary" className="mb-3">
                      {member.position}
                    </Badge>
                    <p className="text-sm text-tertiary font-medium mb-3">
                      {member.experience}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our Journey in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">8+</div>
              <div className="text-white/80 text-sm">Years of Impact</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-white/80 text-sm">Countries Reached</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/80 text-sm">Lives Transformed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1.2K+</div>
              <div className="text-white/80 text-sm">Active Volunteers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;