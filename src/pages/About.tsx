
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const About = () => {
  // Данные о команде
  const teamMembers = [
    {
      id: 1,
      name: "Анна Петрова",
      position: "Арт-директор",
      bio: "Более 10 лет опыта в разработке айдентики для международных брендов",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Михаил Соколов",
      position: "UX/UI дизайнер",
      bio: "Специалист по проектированию интерфейсов с опытом работы в крупных IT-компаниях",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Елена Иванова",
      position: "Веб-дизайнер",
      bio: "Создает современные и функциональные веб-сайты с уникальным дизайном",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Клиенты
  const clients = [
    "ТехноПро", "EcoStore", "FitLife", "ArtCoffee", "GreenTech", "SportPro"
  ];

  // Технологии и инструменты
  const tools = [
    { name: "Adobe Photoshop", icon: "Palette" },
    { name: "Figma", icon: "Pen" },
    { name: "Adobe Illustrator", icon: "PenTool" },
    { name: "Sketch", icon: "Brush" },
    { name: "Adobe XD", icon: "Layers" },
    { name: "After Effects", icon: "Video" }
  ];

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
            <Link to="/portfolio" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Портфолио</Link>
            <Link to="/about" className="font-medium text-gray-900 hover:text-purple-600 transition-colors">О нас</Link>
            <Link to="/contacts" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Контакты</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-purple-600">
              <Icon name="User" size={20} className="inline mr-1" />
              Кабинет
            </Link>
            <Button variant="default" className="hidden md:flex bg-purple-600 hover:bg-purple-700">
              <Link to="/contacts">Связаться</Link>
            </Button>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-12">
        {/* О компании */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">О нас</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы команда профессиональных дизайнеров с многолетним опытом, 
              создающая инновационные решения для бизнеса любого масштаба
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Наша история</h2>
              <p className="text-gray-600 mb-4">
                ДизайнСтудио была основана в 2015 году группой профессиональных дизайнеров, 
                объединенных общей целью: создавать выдающиеся дизайн-проекты, которые помогают 
                бизнесу расти и развиваться.
              </p>
              <p className="text-gray-600 mb-4">
                За годы работы мы выполнили более 500 проектов для клиентов из различных 
                отраслей: от малого бизнеса до крупных корпораций. Наша команда непрерывно 
                развивается, изучает новые технологии и тренды в дизайне.
              </p>
              <p className="text-gray-600">
                Мы гордимся тем, что многие клиенты возвращаются к нам снова и снова, 
                рекомендуют нас своим партнерам и друзьям.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Команда за работой" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-bold">7+</p>
                <p className="text-sm">лет опыта</p>
              </div>
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Наши ценности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                  <Icon name="Heart" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Клиентоориентированность</h3>
                <p className="text-gray-600 text-center">
                  Мы внимательно слушаем наших клиентов и стремимся превзойти их ожидания
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                  <Icon name="Sparkles" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Креативность</h3>
                <p className="text-gray-600 text-center">
                  Мы не боимся экспериментировать и искать нестандартные решения
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                  <Icon name="Target" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Качество</h3>
                <p className="text-gray-600 text-center">
                  Мы уделяем внимание каждой детали и гарантируем высокое качество работы
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Наша команда */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Наша команда</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <Card key={member.id} className="border-0 shadow-md overflow-hidden">
                <div className="relative h-80">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Наши клиенты */}
        <section className="mb-20 bg-white rounded-lg shadow-md p-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Нам доверяют</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center bg-gray-50 rounded-lg p-6 w-40 h-24">
                <span className="text-xl font-bold text-gray-800">{client}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Инструменты */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Технологии и инструменты</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md">
                <Icon name={tool.icon} className="text-purple-600 mb-3" size={32} />
                <span className="text-gray-800 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="text-center bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Наша команда готова помочь воплотить ваши идеи в жизнь. Свяжитесь с нами прямо сейчас!
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
            <Link to="/contacts">Связаться с нами</Link>
          </Button>
        </section>
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

export default About;
