
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeStyle, setActiveStyle] = useState("all");
  const [showMore, setShowMore] = useState(false);

  // Категории проектов
  const categories = [
    { id: "all", name: "Все работы" },
    { id: "web", name: "Веб-дизайн" },
    { id: "branding", name: "Брендинг" },
    { id: "ui", name: "UI/UX" }
  ];

  // Стили проектов
  const styles = [
    { id: "all", name: "Все стили" },
    { id: "minimalist", name: "Минимализм" },
    { id: "corporate", name: "Корпоративный" },
    { id: "creative", name: "Креативный" }
  ];

  // Проекты для портфолио
  const allProjects = [
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

  // Фильтрация проектов
  const filteredProjects = allProjects.filter(project => {
    const categoryMatch = activeFilter === "all" || project.category === activeFilter;
    const styleMatch = activeStyle === "all" || project.style === activeStyle;
    return categoryMatch && styleMatch;
  });

  // Проекты для отображения (с учетом кнопки "Загрузить еще")
  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер с логотипом и навигацией */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="PenTool" size={28} className="text-purple-600" />
            <Link to="/" className="text-xl font-bold">ДизайнСтудио</Link>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Главная</Link>
            <Link to="/portfolio" className="font-medium text-gray-900 hover:text-purple-600 transition-colors">Портфолио</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">О нас</Link>
            <Link to="/contacts" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Контакты</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-purple-600">
              <Icon name="User" size={20} className="inline mr-1" />
              Кабинет
            </Link>
            <Button variant="default" className="hidden md:flex bg-purple-600 hover:bg-purple-700">
              Связаться
            </Button>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-12">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Наше портфолио</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ознакомьтесь с нашими лучшими проектами и узнайте, как мы можем помочь вашему бизнесу
          </p>
        </div>

        {/* Фильтры */}
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

        {/* Галерея проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map(project => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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

        {/* Форма для связи */}
        <div className="max-w-3xl mx-auto mt-20 bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Давайте обсудим ваш проект</h2>
            <p className="text-gray-600 mt-2">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
          </div>

          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="contact">Свяжитесь со мной</TabsTrigger>
              <TabsTrigger value="brief">Заполнить бриф</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <Textarea placeholder="Расскажите немного о вашем проекте" rows={4} />
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Отправить заявку
              </Button>
            </TabsContent>
            
            <TabsContent value="brief" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Тип проекта</label>
                <Input placeholder="Веб-сайт, брендинг, приложение и т.д." />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Описание проекта</label>
                <Textarea placeholder="Опишите ваш проект подробнее" rows={4} />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Бюджет</label>
                <Input placeholder="Ваш приблизительный бюджет" />
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Отправить бриф
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center space-x-2">
              <Icon name="PenTool" size={24} className="text-purple-400" />
              <span className="text-xl font-bold">ДизайнСтудио</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2025 ДизайнСтудио. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
