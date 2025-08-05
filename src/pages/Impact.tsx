import Navigation from "@/components/Navigation";
import ImpactSection from "@/components/ImpactSection";
import FloatingActionButton from "@/components/FloatingActionButton";

const Impact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ImpactSection />
      </main>
      <FloatingActionButton />
    </div>
  );
};

export default Impact;