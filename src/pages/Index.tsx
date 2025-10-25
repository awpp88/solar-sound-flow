import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MusicSection />
      <Footer />
    </div>
  );
};

export default Index;
