import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FloatingActionButton from "@/components/FloatingActionButton";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
      </main>
      <FloatingActionButton />
    </div>
  );
};

export default Home;