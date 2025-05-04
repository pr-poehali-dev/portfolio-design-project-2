
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const ProfileSettings = () => {
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Имитация сохранения настроек
  const handleSaveSettings = () => {
    setSavedSuccess(true);
    
    // Сбрасываем уведомление через 3 секунды
    setTimeout(() => {
      setSavedSuccess(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-6">Настройки профиля</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" defaultValue="Алексей Смирнов" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="alexey@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" defaultValue="+7 (900) 123-45-67" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Компания</Label>
              <Input id="company" defaultValue="ООО «Инновации»" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">О себе</Label>
              <Textarea 
                id="bio" 
                defaultValue="Генеральный директор компании ООО «Инновации». Работаем в сфере IT с 2018 года."
                rows={3}
              />
            </div>
            
            <div className="pt-4">
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={handleSaveSettings}
              >
                {savedSuccess ? (
                  <>
                    <Icon name="Check" className="mr-2" size={16} />
                    Сохранено!
                  </>
                ) : (
                  "Сохранить изменения"
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-6">Настройки уведомлений</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Email-уведомления</h4>
                <p className="text-sm text-gray-500">Получать уведомления о новых сообщениях на email</p>
              </div>
              <Switch defaultChecked id="email-notifications" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Статус проекта</h4>
                <p className="text-sm text-gray-500">Получать уведомления об изменении статуса проекта</p>
              </div>
              <Switch defaultChecked id="project-status" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Новые документы</h4>
                <p className="text-sm text-gray-500">Уведомления о новых загруженных документах</p>
              </div>
              <Switch defaultChecked id="new-documents" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Маркетинговые рассылки</h4>
                <p className="text-sm text-gray-500">Получать новости и специальные предложения</p>
              </div>
              <Switch id="marketing" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-6">Безопасность</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Текущий пароль</Label>
              <Input id="current-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-password">Новый пароль</Label>
              <Input id="new-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Подтвердите пароль</Label>
              <Input id="confirm-password" type="password" />
            </div>
            
            <div className="pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Изменить пароль
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
