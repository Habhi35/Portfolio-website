import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="font-heading text-xl font-bold gradient-text">
            HN<span className="text-primary">.</span>
          </a>
          <div className="flex items-center gap-3">
            {[
              { href: "mailto:yellapuhabhiram@gmail.com", icon: Mail },
              { href: "https://linkedin.com/in/habhi-ram-yellapu-006727260", icon: Linkedin },
              { href: "https://github.com", icon: Github },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-primary fill-primary" /> by Habhiram
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
