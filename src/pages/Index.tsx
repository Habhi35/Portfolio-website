import React from "react";
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
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3 block">Introduction</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A quick look at who I am and what drives me.
            </p>
          </div>
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-10 text-muted-foreground leading-relaxed space-y-5 hover-lift">
            <p className="text-lg">
              I'm a <span className="text-foreground font-semibold">Backend Developer</span> specializing in{" "}
              <span className="text-primary font-semibold">Python and Django</span>, with hands-on
              experience building production-grade REST APIs and scalable backend systems.
            </p>
            <p>
              Currently working at <span className="text-foreground font-medium">Genzix | Blentive Technologies</span>, I build and maintain
              backend systems, implement secure authentication, optimize database performance,
              and collaborate closely with frontend teams to ship complete features.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Python", "Django", "REST APIs", "PostgreSQL"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 text-sm rounded-lg bg-accent text-primary font-medium border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
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
