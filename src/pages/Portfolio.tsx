
import { useState } from "react";
import PageLayout from "@/components/Layout/PageLayout";
import ProjectFilters from "@/components/Portfolio/ProjectFilters";
import ProjectGallery from "@/components/Portfolio/ProjectGallery";
import ContactForm from "@/components/Portfolio/ContactForm";
import { projects, categories, styles } from "@/data/portfolioData";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeStyle, setActiveStyle] = useState("all");

  return (
    <PageLayout>
      {/* Заголовок страницы */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Наше портфолио</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ознакомьтесь с нашими лучшими проектами и узнайте, как мы можем помочь вашему бизнесу
        </p>
      </div>

      {/* Фильтры */}
      <ProjectFilters 
        categories={categories}
        styles={styles}
        activeFilter={activeFilter}
        activeStyle={activeStyle}
        setActiveFilter={setActiveFilter}
        setActiveStyle={setActiveStyle}
      />

      {/* Галерея проектов */}
      <ProjectGallery 
        projects={projects}
        categories={categories}
        styles={styles}
        activeFilter={activeFilter}
        activeStyle={activeStyle}
      />

      {/* Форма для связи */}
      <ContactForm />
    </PageLayout>
  );
};

export default Portfolio;
