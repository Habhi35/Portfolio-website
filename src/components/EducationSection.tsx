import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech (ECE)",
    school: "Raghu Institute of Technology",
    period: "2021 – 2025",
    score: "7.97 / 10.0 CGPA",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Sri Chaitanya Junior College",
    period: "2019 – 2021",
    score: "955 / 1000 Marks",
  },
  {
    degree: "SSC",
    school: "A.P Model School",
    period: "2018 – 2019",
    score: "9.7 / 10.0 CGPA",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Academic foundation that supports my professional journey.
        </p>

        <div className="max-w-3xl mx-auto space-y-5">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="glass-card rounded-xl p-6 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-accent text-primary shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-heading text-lg font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-primary font-medium">{edu.score}</span>
                </div>
                <p className="text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
