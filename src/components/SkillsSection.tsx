import { Code, Database, Wrench, Cloud, Shield, Server } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python"],
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["Django", "Django REST Framework"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "SQLite"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "CI/CD", "Docker (Basics)"],
  },
  {
    title: "Concepts",
    icon: Shield,
    skills: ["REST APIs", "Authentication"],
  },
  {
    title: "Deployment",
    icon: Cloud,
    skills: ["Render"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Technologies and tools I work with.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent text-primary">
                  <group.icon className="h-4 w-4" />
                </div>
                <h3 className="font-heading font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
