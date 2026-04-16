import { Code, Database, Wrench, Cloud, Shield, Server } from "lucide-react";

const skillGroups = [
  { title: "Languages", icon: Code, skills: ["Python"], color: "from-blue-500/20 to-primary/10" },
  { title: "Frameworks", icon: Server, skills: ["Django", "Django REST Framework"], color: "from-primary/20 to-royal-light/10" },
  { title: "Databases", icon: Database, skills: ["PostgreSQL", "SQLite"], color: "from-royal-dark/20 to-primary/10" },
  { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "Postman", "CI/CD", "Docker (Basics)"], color: "from-primary/15 to-royal-light/10" },
  { title: "Concepts", icon: Shield, skills: ["REST APIs", "Authentication"], color: "from-royal-light/20 to-primary/10" },
  { title: "Deployment", icon: Cloud, skills: ["Render"], color: "from-primary/20 to-royal-dark/10" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3 block">Expertise</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto stagger-children">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              <div className={`p-5 bg-gradient-to-br ${group.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-card/80 text-primary border border-primary/20">
                    <group.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg group-hover:text-primary transition-colors">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-card/60 text-foreground border border-border/50 hover:border-primary/30 transition-colors font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
