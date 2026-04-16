import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-royal-light/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-border">
            Backend Developer
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Yellapu Habhiram</span>
            <br />
            Naidu
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
            Backend developer with practical experience building real-world applications
            and scalable systems. Passionate about developing impactful backend solutions
            with efficiency, reliability, and great user experience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" /> Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#projects">
                View Projects <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:yellapuhabhiram@gmail.com"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/habhi-ram-yellapu-006727260"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
