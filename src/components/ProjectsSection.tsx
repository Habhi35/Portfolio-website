import { Calendar, ShoppingCart, ArrowUpRight } from "lucide-react";
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
    gradient: "from-primary/20 to-royal-light/10",
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
    gradient: "from-royal-dark/20 to-primary/10",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative noise-bg">
      <div className="absolute inset-0 bg-accent/20 -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3 block">Portfolio</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world applications I've architected and built from the ground up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover-lift"
            >
              {/* Project header with gradient */}
              <div className={`p-6 bg-gradient-to-br ${project.gradient} border-b border-border/30`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-xl bg-card/80 text-primary border border-primary/20 glow-primary">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="font-heading text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
              </div>

              {/* Project body */}
              <div className="p-6">
                <ul className="space-y-2.5 text-sm text-muted-foreground mb-6">
                  {project.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 group/item">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 group-hover/item:bg-primary shrink-0 transition-colors" />
                      <span className="group-hover/item:text-foreground transition-colors">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </Badge>
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

export default ProjectsSection;
