
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
            <Link to="/contacts">Связаться</Link>
          </Button>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Icon name="Menu" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
