import { ArrowDown, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const roles = ["Backend Developer", "Django Specialist", "API Architect", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-royal-light/10 blur-[80px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-royal-dark/5 blur-[120px] animate-pulse-glow" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 text-center relative">
        <div className="animate-fade-in">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-accent/80 text-accent-foreground text-sm font-medium border border-primary/20 backdrop-blur-sm glow-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for Opportunities
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Habhiram</span>
          </h1>

          {/* Typing effect role */}
          <div className="h-10 mb-6 flex items-center justify-center">
            <span className="text-xl md:text-2xl text-primary font-medium font-heading typing-cursor">
              {displayed}
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
            I build robust backend systems and scalable APIs with{" "}
            <span className="text-foreground font-medium">Python & Django</span>. Passionate about
            clean architecture, performance optimization, and delivering impactful solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Button size="lg" className="gap-2 glow-primary relative overflow-hidden group" asChild>
              <a href="#contact">
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Let's Connect
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 hover-lift border-primary/30 hover:border-primary/60" asChild>
              <a href="#projects">
                View My Work <ArrowDown className="h-4 w-4 animate-bounce" />
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3">
            {[
              { href: "mailto:yellapuhabhiram@gmail.com", icon: Mail, label: "Email" },
              { href: "https://linkedin.com/in/habhi-ram-yellapu-006727260", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com", icon: Github, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group p-3 rounded-xl text-muted-foreground hover:text-primary bg-card/50 border border-border/50 hover:border-primary/30 hover:glow-primary transition-all duration-300 hover-lift"
              >
                <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
