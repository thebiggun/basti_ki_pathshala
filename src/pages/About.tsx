import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import FloatingActionButton from "@/components/FloatingActionButton";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <AboutSection />
      </main>
      <FloatingActionButton />
    </div>
  );
};

export default About;