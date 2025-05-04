
import { Button } from "@/components/ui/button";

interface FilterOption {
  id: string;
  name: string;
}

interface ProjectFiltersProps {
  categories: FilterOption[];
  styles: FilterOption[];
  activeFilter: string;
  activeStyle: string;
  setActiveFilter: (filter: string) => void;
  setActiveStyle: (style: string) => void;
}

const ProjectFilters = ({
  categories,
  styles,
  activeFilter,
  activeStyle,
  setActiveFilter,
  setActiveStyle
}: ProjectFiltersProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
        {/* Фильтр по категориям */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={activeFilter === category.id ? "bg-purple-600 hover:bg-purple-700" : ""}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Фильтр по стилям */}
        <div className="flex flex-wrap justify-center gap-2">
          {styles.map(style => (
            <Button
              key={style.id}
              variant={activeStyle === style.id ? "default" : "outline"}
              className={activeStyle === style.id ? "bg-purple-600 hover:bg-purple-700" : ""}
              onClick={() => setActiveStyle(style.id)}
            >
              {style.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
