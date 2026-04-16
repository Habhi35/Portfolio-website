import { Code2, ShoppingCart, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Creative Care",
    subtitle: "Appointment & Therapist Booking System",
    icon: Calendar,
    tags: ["Python", "Django", "DRF", "Google Calendar API", "PostgreSQL"],
    points: [
      "Backend system for therapist appointment booking using Django REST Framework",
      "REST APIs for user registration, therapist profiles, availability scheduling",
      "Real-time slot management with conflict handling to prevent double bookings",
      "Integrated Google Calendar API for automatic event creation & meeting links",
      "Secure authentication and role-based access for users and therapists",
    ],
  },
  {
    title: "PVR Mart Backend",
    subtitle: "E-commerce API System",
    icon: ShoppingCart,
    tags: ["Django", "DRF", "JWT", "Postman", "PostgreSQL"],
    points: [
      "Scalable backend for e-commerce with Django REST Framework",
      "RESTful APIs for product listing, cart management, and order processing",
      "Secure JWT / token-based authentication system",
      "Search, filtering, pagination, and product categorization features",
      "Optimized database models using Django ORM",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Real-world applications I've built from the ground up.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent text-primary">
                  <project.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground mb-5">
                {project.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
