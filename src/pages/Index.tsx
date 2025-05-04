
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      id: 1,
      title: "Веб-дизайн",
      description: "Создаем уникальные и удобные сайты для бизнеса любого размера",
      icon: "Palette"
    },
    {
      id: 2,
      title: "Графический дизайн",
      description: "Разрабатываем логотипы, брендбуки и фирменный стиль",
      icon: "Brush"
    },
    {
      id: 3,
      title: "UI/UX Дизайн",
      description: "Проектируем интерфейсы с фокусом на пользовательский опыт",
      icon: "Layers"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Ребрендинг компании ТехноПро",
      category: "Брендинг",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Интернет-магазин EcoStore",
      category: "Веб-дизайн",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Приложение для фитнес-клуба FitLife",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер с логотипом и навигацией */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="PenTool" size={28} className="text-purple-600" />
            <span className="text-xl font-bold">ДизайнСтудио</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium text-gray-900 hover:text-purple-600 transition-colors">Главная</Link>
            <Link to="/portfolio" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Портфолио</Link>
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
      <main>
        {/* Hero секция */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Превращаем идеи в визуальные истории</h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Мы создаем уникальный дизайн, который помогает брендам выделяться и достигать своих целей
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Начать проект
              </Button>
              <Button size="lg" variant="outline">
                Смотреть работы
              </Button>
            </div>
          </div>
        </section>

        {/* Блок с услугами */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Наши услуги</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="text-purple-600" size={24} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">Подробнее</Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Заказать</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Слайдер с работами */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Наши проекты</h2>
            
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id}>
                    <div className="p-1">
                      <Card className="overflow-hidden border-0 shadow-md">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-64 object-cover"
                        />
                        <CardContent className="p-6">
                          <p className="text-sm font-medium text-purple-600 mb-2">{project.category}</p>
                          <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                          <Button variant="outline" size="sm">
                            Смотреть кейс
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="relative static rounded-full" />
                <CarouselNext className="relative static rounded-full" />
              </div>
            </Carousel>
            
            <div className="text-center mt-10">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Link to="/portfolio">Все работы</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
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

export default Index;
