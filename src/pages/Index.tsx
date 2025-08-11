import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import EducationTimeline from "@/components/EducationTimeline";
import AppointmentCalendar from "@/components/AppointmentCalendar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <CaseStudies />
        <EducationTimeline />
        <AppointmentCalendar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
