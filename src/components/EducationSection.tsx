import { GraduationCap, Award } from "lucide-react";

const education = [
  { degree: "B.Tech (ECE)", school: "Raghu Institute of Technology", period: "2021 – 2025", score: "7.97 / 10.0 CGPA" },
  { degree: "Intermediate (MPC)", school: "Sri Chaitanya Junior College", period: "2019 – 2021", score: "955 / 1000 Marks" },
  { degree: "SSC", school: "A.P Model School", period: "2018 – 2019", score: "9.7 / 10.0 CGPA" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative noise-bg">
      <div className="absolute inset-0 bg-accent/20 -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3 block">Foundation</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Academic milestones that shaped my technical journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="glass-card rounded-2xl p-6 md:p-8 hover-lift relative group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[29px] top-8 w-3 h-3 rounded-full bg-primary glow-primary hidden md:block" />

              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-accent text-primary shrink-0 border border-primary/20 group-hover:glow-primary transition-all">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                      <Award className="h-3.5 w-3.5" />
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-foreground/80 font-medium mt-1">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
