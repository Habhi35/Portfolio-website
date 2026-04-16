import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Professional journey building robust backend systems.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent text-primary shrink-0">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">
                  Backend Django Developer
                </h3>
                <p className="text-primary font-medium">
                  Genzix | Blentive Technologies Pvt Ltd
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  October 2025 – Present
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    Developed and maintained backend systems for real-world applications, ensuring smooth functionality and reliability
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    Built and integrated REST APIs to support user management, authentication, and data handling
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    Optimized database queries and improved system performance for faster response times
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    Implemented secure authentication and handled API testing using Postman
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    Collaborated with frontend developers to integrate APIs and deliver complete features
                  </li>
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
