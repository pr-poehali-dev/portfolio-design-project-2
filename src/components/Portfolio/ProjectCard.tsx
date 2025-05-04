
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  category: string;
  style: string;
  description: string;
  image: string;
}

interface FilterOption {
  id: string;
  name: string;
}

interface ProjectCardProps {
  project: Project;
  categories: FilterOption[];
  styles: FilterOption[];
}

const ProjectCard = ({ project, categories, styles }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
            {categories.find(c => c.id === project.category)?.name || project.category}
          </span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
            {styles.find(s => s.id === project.style)?.name || project.style}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
