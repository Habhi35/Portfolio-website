import { Mail, Phone, Linkedin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  { href: "mailto:yellapuhabhiram@gmail.com", icon: Mail, label: "Email", value: "yellapuhabhiram@gmail.com" },
  { href: "tel:9059877309", icon: Phone, label: "Phone", value: "+91 9059877309" },
  { href: "https://linkedin.com/in/habhi-ram-yellapu-006727260", icon: Linkedin, label: "LinkedIn", value: "Habhiram Yellapu", external: true },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3 block">Connect</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm open to new opportunities and collaborations. Let's build something great together!
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-10 space-y-5">
            {contacts.map(({ href, icon: Icon, label, value, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-accent/30 hover:bg-accent/60 border border-transparent hover:border-primary/20 transition-all group hover-lift"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:glow-primary transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{value}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}

            <Button className="w-full mt-6 gap-2 glow-primary group" size="lg" asChild>
              <a href="mailto:yellapuhabhiram@gmail.com">
                <Send className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
