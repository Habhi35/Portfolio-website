import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Get in Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          I'm open to opportunities and collaborations. Let's connect!
        </p>

        <div className="max-w-md mx-auto glass-card rounded-xl p-8 space-y-6">
          <a
            href="mailto:yellapuhabhiram@gmail.com"
            className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="p-3 rounded-lg bg-accent text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">yellapuhabhiram@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:9059877309"
            className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="p-3 rounded-lg bg-accent text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium text-foreground">9059877309</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/habhi-ram-yellapu-006727260"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="p-3 rounded-lg bg-accent text-primary">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <p className="font-medium text-foreground">Habhiram Yellapu</p>
            </div>
          </a>

          <Button className="w-full mt-4" size="lg" asChild>
            <a href="mailto:yellapuhabhiram@gmail.com">Send Me a Message</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
