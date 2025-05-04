
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ProjectCard from "./ProjectCard";

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

interface ProjectGalleryProps {
  projects: Project[];
  categories: FilterOption[];
  styles: FilterOption[];
  activeFilter: string;
  activeStyle: string;
}

const ProjectGallery = ({ 
  projects, 
  categories, 
  styles, 
  activeFilter, 
  activeStyle 
}: ProjectGalleryProps) => {
  const [showMore, setShowMore] = useState(false);

  // Фильтрация проектов
  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeFilter === "all" || project.category === activeFilter;
    const styleMatch = activeStyle === "all" || project.style === activeStyle;
    return categoryMatch && styleMatch;
  });

  // Проекты для отображения (с учетом кнопки "Загрузить еще")
  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {visibleProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            categories={categories} 
            styles={styles} 
          />
        ))}
      </div>

      {/* Кнопка "Загрузить еще" */}
      {filteredProjects.length > 6 && !showMore && (
        <div className="text-center mb-16">
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => setShowMore(true)}
          >
            Загрузить еще
            <Icon name="ChevronDown" className="ml-2" size={16} />
          </Button>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
