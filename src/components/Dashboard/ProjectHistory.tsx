
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProjectHistory = () => {
  // Фиктивные данные истории проектов
  const projects = [
    {
      id: 1,
      title: "Редизайн корпоративного сайта",
      type: "Веб-дизайн",
      status: "В работе",
      startDate: "01.04.2025",
      endDate: "15.05.2025",
      budget: "120 000 ₽"
    },
    {
      id: 2,
      title: "Разработка логотипа",
      type: "Брендинг",
      status: "Ожидает утверждения",
      startDate: "15.04.2025",
      endDate: "10.05.2025",
      budget: "45 000 ₽"
    },
    {
      id: 3,
      title: "Дизайн упаковки продукта",
      type: "Брендинг",
      status: "Завершен",
      startDate: "10.02.2025",
      endDate: "15.03.2025",
      budget: "60 000 ₽"
    },
    {
      id: 4,
      title: "Мобильное приложение FitLife",
      type: "UI/UX",
      status: "Завершен",
      startDate: "05.01.2025",
      endDate: "25.02.2025",
      budget: "180 000 ₽"
    },
    {
      id: 5,
      title: "Дизайн лендинга для продукта",
      type: "Веб-дизайн",
      status: "Завершен",
      startDate: "10.12.2024",
      endDate: "15.01.2025",
      budget: "50 000 ₽"
    }
  ];

  // Функция для определения цвета статуса
  const getStatusColor = (status: string) => {
    switch (status) {
      case "В работе":
        return "bg-blue-100 text-blue-600";
      case "Ожидает утверждения":
        return "bg-amber-100 text-amber-600";
      case "Завершен":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">История проектов</h3>
            <Button variant="outline" className="flex items-center">
              <Icon name="Filter" className="mr-2" size={16} />
              Фильтр
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Проект</TableHead>
                  <TableHead>Тип</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Начало</TableHead>
                  <TableHead>Окончание</TableHead>
                  <TableHead>Бюджет</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map(project => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{project.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell>{project.startDate}</TableCell>
                    <TableCell>{project.endDate}</TableCell>
                    <TableCell>{project.budget}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" title="Просмотр">
                          <Icon name="Eye" size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" title="Документы">
                          <Icon name="FileText" size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" title="Сообщения">
                          <Icon name="MessageSquare" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-6">Завершенные проекты</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter(project => project.status === "Завершен")
              .map(project => (
                <div 
                  key={project.id} 
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">{project.title}</h4>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                      Завершен
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    {project.startDate} — {project.endDate}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{project.type}</span>
                    <span className="font-bold">{project.budget}</span>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectHistory;
