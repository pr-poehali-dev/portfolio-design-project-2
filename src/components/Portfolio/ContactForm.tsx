
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
