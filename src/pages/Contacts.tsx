
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Обработка отправки формы (имитация)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Имитация отправки формы
    setTimeout(() => {
      setFormStatus('success');
      // Сбрасываем статус через некоторое время
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

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
            <Link to="/about" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">О нас</Link>
            <Link to="/contacts" className="font-medium text-gray-900 hover:text-purple-600 transition-colors">Контакты</Link>
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Свяжитесь с нами</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Заполните форму ниже, и мы ответим на все ваши вопросы в ближайшее время
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Контактная информация */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Контактная информация</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <Icon name="MapPin" className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-gray-600">123456, г. Москва, ул. Дизайнерская, д. 42</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <Icon name="Phone" className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (123) 456-78-90</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <Icon name="Mail" className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@designstudio.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <Icon name="Clock" className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Часы работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-600">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-bold text-lg mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <Tabs defaultValue="contact" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="contact">Связаться с нами</TabsTrigger>
                    <TabsTrigger value="order">Заказать услугу</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="contact">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                          <Input placeholder="Введите ваше имя" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input type="email" placeholder="your@email.com" required />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                        <Input placeholder="Тема сообщения" required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                        <Textarea placeholder="Введите ваше сообщение" rows={5} required />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        disabled={formStatus === 'sending'}
                      >
                        {formStatus === 'sending' ? (
                          <>
                            <Icon name="Loader2" className="mr-2 animate-spin" />
                            Отправка...
                          </>
                        ) : formStatus === 'success' ? (
                          <>
                            <Icon name="Check" className="mr-2" />
                            Отправлено!
                          </>
                        ) : "Отправить сообщение"}
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="order">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                          <Input placeholder="Введите ваше имя" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input type="email" placeholder="your@email.com" required />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Тип услуги</label>
                        <Input placeholder="Веб-дизайн, брендинг, UI/UX и т.д." required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Описание проекта</label>
                        <Textarea placeholder="Опишите ваш проект подробнее" rows={4} required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Бюджет</label>
                        <Input placeholder="Укажите примерный бюджет" />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        disabled={formStatus === 'sending'}
                      >
                        {formStatus === 'sending' ? (
                          <>
                            <Icon name="Loader2" className="mr-2 animate-spin" />
                            Отправка...
                          </>
                        ) : formStatus === 'success' ? (
                          <>
                            <Icon name="Check" className="mr-2" />
                            Отправлено!
                          </>
                        ) : "Отправить заявку"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Карта */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Как нас найти</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Icon name="Map" size={64} className="text-gray-400 mb-4" />
              <p className="text-gray-500">Карта местоположения офиса</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Часто задаваемые вопросы</h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Как происходит процесс работы над проектом?</h3>
              <p className="text-gray-600">
                Процесс работы включает несколько этапов: обсуждение требований, 
                разработка концепции, создание дизайна, внесение правок и сдача готового проекта.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Сколько времени занимает разработка дизайна?</h3>
              <p className="text-gray-600">
                Сроки зависят от сложности проекта. В среднем, веб-дизайн занимает 2-3 недели, 
                брендинг - 3-4 недели, разработка мобильного приложения - 4-6 недель.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Какие гарантии вы предоставляете?</h3>
              <p className="text-gray-600">
                Мы работаем по договору, в котором прописаны все условия и гарантии. 
                Мы вносим правки до тех пор, пока клиент не будет полностью удовлетворен результатом.
              </p>
            </div>
          </div>
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

export default Contacts;
