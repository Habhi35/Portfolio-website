import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <HeroSection />
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            A quick introduction to who I am and what I do.
          </p>
          <div className="max-w-3xl mx-auto glass-card rounded-xl p-6 md:p-8 text-muted-foreground leading-relaxed space-y-4">
            <p>
              I'm a Backend Developer specializing in Python and Django, with hands-on
              experience building production-grade REST APIs and scalable backend systems.
              I've contributed to projects that focus on improving efficiency, reliability,
              and delivering great user experiences.
            </p>
            <p>
              Currently working at Genzix | Blentive Technologies, I build and maintain
              backend systems, implement secure authentication, optimize database performance,
              and collaborate closely with frontend teams to ship complete features.
            </p>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
