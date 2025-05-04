
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
