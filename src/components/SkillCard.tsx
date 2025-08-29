import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
}

export function SkillCard({ title, description, icon: Icon, technologies }: SkillCardProps) {
  return (
    <div className="glass-card-hover p-8 group">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-accent/50 text-accent-foreground rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}