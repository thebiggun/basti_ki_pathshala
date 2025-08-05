import Navigation from "@/components/Navigation";
import VolunteerForm from "@/components/VolunteerForm";

const Volunteer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <VolunteerForm />
      </main>
    </div>
  );
};

export default Volunteer;