import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3 block">Career</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Building robust backend systems in production environments.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift relative">
            {/* Timeline dot */}
            <div className="absolute left-[29px] top-10 w-3 h-3 rounded-full bg-primary glow-primary hidden md:block" />

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 rounded-2xl bg-accent text-primary shrink-0 self-start glow-primary">
                <Briefcase className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-heading text-xl md:text-2xl font-bold">
                    Backend Django Developer
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Current
                  </span>
                </div>
                <p className="text-primary font-semibold text-lg mb-1">
                  Genzix | Blentive Technologies Pvt Ltd
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> October 2025 – Present
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> India
                  </span>
                </div>
                <ul className="space-y-3 stagger-children">
                  {[
                    "Developed and maintained backend systems for real-world applications, ensuring smooth functionality and reliability",
                    "Built and integrated REST APIs to support user management, authentication, and data handling",
                    "Optimized database queries and improved system performance for faster response times",
                    "Implemented secure authentication and handled API testing using Postman",
                    "Collaborated with frontend developers to integrate APIs and deliver complete features",
                  ].map((point, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground group/item">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary/60 group-hover/item:bg-primary shrink-0 transition-colors" />
                      <span className="group-hover/item:text-foreground transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
