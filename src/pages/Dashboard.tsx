
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import PageLayout from "@/components/Layout/PageLayout";
import ProfileSettings from "@/components/Dashboard/ProfileSettings";
import ProjectHistory from "@/components/Dashboard/ProjectHistory";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Фиктивные данные пользователя
  const user = {
    name: "Алексей Смирнов",
    email: "alexey@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    role: "Клиент",
    joined: "Март 2023"
  };

  // Фиктивные активные проекты
  const activeProjects = [
    {
      id: 1,
      title: "Редизайн корпоративного сайта",
      status: "В работе",
      progress: 65,
      deadline: "15 мая 2025",
      manager: "Анна Петрова"
    },
    {
      id: 2,
      title: "Разработка логотипа",
      status: "Ожидает утверждения",
      progress: 90,
      deadline: "10 мая 2025",
      manager: "Михаил Соколов"
    }
  ];

  return (
    <PageLayout>
      {/* Хедер страницы */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Личный кабинет</h1>
          <p className="text-gray-600">Управляйте своими проектами и настройками профиля</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 mt-4 md:mt-0">
          <Icon name="Plus" className="mr-2" size={16} />
          Новый проект
        </Button>
      </div>

      {/* Обзор профиля */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold mb-1">{user.name}</h2>
              <p className="text-gray-600 mb-3">{user.email}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                  {user.role}
                </span>
                <span className="mx-2">•</span>
                <span>С нами с {user.joined}</span>
              </div>
              <Button variant="outline" className="w-full">
                <Icon name="Edit" className="mr-2" size={16} />
                Редактировать профиль
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4">Активные проекты</h3>
            {activeProjects.length > 0 ? (
              <div className="space-y-6">
                {activeProjects.map(project => (
                  <div key={project.id} className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold">{project.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === "В работе" 
                          ? "bg-blue-100 text-blue-600" 
                          : "bg-amber-100 text-amber-600"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Прогресс</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <div>
                        <Icon name="Calendar" className="inline mr-1" size={14} />
                        Дедлайн: {project.deadline}
                      </div>
                      <div>
                        <Icon name="User" className="inline mr-1" size={14} />
                        Менеджер: {project.manager}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-6">
                У вас пока нет активных проектов.
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Табы основного содержимого */}
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="w-full border-b mb-6 pb-px">
          <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none">
            <Icon name="LayoutDashboard" className="mr-2" size={16} />
            Обзор
          </TabsTrigger>
          <TabsTrigger value="projects" className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none">
            <Icon name="FolderOpen" className="mr-2" size={16} />
            Проекты
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none">
            <Icon name="Settings" className="mr-2" size={16} />
            Настройки
          </TabsTrigger>
          <TabsTrigger value="messages" className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none">
            <Icon name="MessageSquare" className="mr-2" size={16} />
            Сообщения
            <span className="ml-2 bg-purple-600 text-white text-xs rounded-full px-2 py-px">3</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Icon name="BarChart" className="mr-2" size={18} />
                  Статистика проектов
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Всего проектов</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Завершено</span>
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>В процессе</span>
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Положительные отзывы</span>
                    <span className="font-bold">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Icon name="FileText" className="mr-2" size={18} />
                  Последние документы
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Icon name="FileText" className="mr-3 text-purple-600" size={20} />
                      <div>
                        <p className="font-medium">Договор на редизайн сайта.pdf</p>
                        <p className="text-xs text-gray-500">Загружен: 3 мая 2025</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Download" size={18} />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Icon name="Image" className="mr-3 text-purple-600" size={20} />
                      <div>
                        <p className="font-medium">Макет логотипа.png</p>
                        <p className="text-xs text-gray-500">Загружен: 1 мая 2025</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Download" size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <ProjectHistory />
        </TabsContent>

        <TabsContent value="settings">
          <ProfileSettings />
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Icon name="MessageSquare" className="mr-2" size={18} />
                Сообщения
              </h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Анна Петрова</div>
                    <div className="text-xs text-gray-500">Сегодня, 10:45</div>
                  </div>
                  <p className="text-gray-600 mb-3">Добрый день! Направляю вам обновленный макет главной страницы сайта. Жду вашего отзыва.</p>
                  <div className="flex justify-between">
                    <span className="text-purple-600 text-sm font-medium cursor-pointer hover:underline">
                      Ответить
                    </span>
                    <span className="bg-purple-600 text-white text-xs rounded-full px-2 py-px">
                      Новое
                    </span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Михаил Соколов</div>
                    <div className="text-xs text-gray-500">Вчера, 15:30</div>
                  </div>
                  <p className="text-gray-600 mb-3">Здравствуйте! Подготовил три варианта логотипа согласно вашим требованиям. Можем обсудить детали завтра в 14:00?</p>
                  <div className="flex justify-between">
                    <span className="text-purple-600 text-sm font-medium cursor-pointer hover:underline">
                      Ответить
                    </span>
                    <span className="bg-purple-600 text-white text-xs rounded-full px-2 py-px">
                      Новое
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Dashboard;
