
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Варзуга-Тур</h3>
            <p>Организация рыболовных туров на Кольском полуострове с 2005 года. Мы делаем всё, чтобы ваша рыбалка была комфортной и результативной.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Наши услуги</h3>
            <ul className="space-y-2">
              <li>Рыболовные туры "под ключ"</li>
              <li>Аренда снаряжения и экипировки</li>
              <li>Услуги профессиональных гидов</li>
              <li>Трансфер из аэропорта</li>
              <li>Организация питания на маршруте</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <address className="not-italic">
              г. Мурманск, ул. Ленина, 82, офис 305<br />
              Телефон: +7 (8152) 78-90-12<br />
              Email: info@varzuga-tour.ru
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Варзуга-Тур. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white mr-4">Политика конфиденциальности</a>
            <a href="#" className="text-gray-300 hover:text-white">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
