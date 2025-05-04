
export interface Project {
  id: number;
  title: string;
  category: string;
  style: string;
  description: string;
  image: string;
}

export interface FilterOption {
  id: string;
  name: string;
}

// Категории проектов
export const categories: FilterOption[] = [
  { id: "all", name: "Все работы" },
  { id: "web", name: "Веб-дизайн" },
  { id: "branding", name: "Брендинг" },
  { id: "ui", name: "UI/UX" }
];

// Стили проектов
export const styles: FilterOption[] = [
  { id: "all", name: "Все стили" },
  { id: "minimalist", name: "Минимализм" },
  { id: "corporate", name: "Корпоративный" },
  { id: "creative", name: "Креативный" }
];

// Проекты для портфолио
export const projects: Project[] = [
  {
    id: 1,
    title: "Ребрендинг ТехноПро",
    category: "branding",
    style: "corporate",
    description: "Полный ребрендинг технологической компании",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Интернет-магазин EcoStore",
    category: "web",
    style: "minimalist",
    description: "Дизайн интернет-магазина экологических товаров",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Приложение FitLife",
    category: "ui",
    style: "minimalist",
    description: "Дизайн мобильного приложения для фитнес-клуба",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Упаковка ArtCoffee",
    category: "branding",
    style: "creative",
    description: "Разработка упаковки для премиальной кофейни",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Сайт архитектурного бюро",
    category: "web",
    style: "minimalist",
    description: "Дизайн сайта для студии архитектуры и дизайна",
    image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Приложение TravelGuide",
    category: "ui",
    style: "creative",
    description: "Интерфейс приложения для путешественников",
    image: "https://images.unsplash.com/photo-1512295767273-ac5a9a8139af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Айдентика GreenTech",
    category: "branding",
    style: "corporate",
    description: "Разработка айдентики для эко-стартапа",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Интернет-магазин SportPro",
    category: "web",
    style: "corporate",
    description: "Дизайн сайта спортивных товаров",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];
