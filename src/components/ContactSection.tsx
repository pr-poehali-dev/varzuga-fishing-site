
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

const managers = [
  {
    name: "Алексей Иванов",
    position: "Главный организатор туров",
    phone: "+7 (921) 123-45-67",
    email: "alexey@varzuga-tour.ru",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Елена Смирнова",
    position: "Менеджер по бронированию",
    phone: "+7 (921) 765-43-21",
    email: "elena@varzuga-tour.ru",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Сергей Петров",
    position: "Инструктор-гид",
    phone: "+7 (911) 987-65-43",
    email: "sergey@varzuga-tour.ru",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

export const ContactSection = () => {
  return (
    <section id="contacts" className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Связаться с нами</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Забронировать тур</h3>
          <p className="text-lg mb-6">
            Чтобы забронировать рыболовный тур на реку Варзуга или получить дополнительную информацию, 
            свяжитесь с нашими менеджерами. Мы подберем оптимальные даты и программу в соответствии с вашими пожеланиями.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="text-[#1EAEDB] mr-3" />
              <span>+7 (8152) 78-90-12 (офис в Мурманске)</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#1EAEDB] mr-3" />
              <span>info@varzuga-tour.ru</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-[#1EAEDB] mr-3" />
              <span>г. Мурманск, ул. Ленина, 82, офис 305</span>
            </div>
            <div className="flex items-center">
              <Calendar className="text-[#1EAEDB] mr-3" />
              <span>Сезон 2025: 10 июня - 20 сентября</span>
            </div>
          </div>
          
          <Button className="mt-6 bg-[#33C3F0] hover:bg-[#0FA0CE] text-white">
            Скачать прайс-лист
          </Button>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Как добраться</h3>
          <p className="mb-4">
            Село Варзуга расположено в 250 км от Мурманска. Добраться можно на автомобиле или заказать трансфер. 
            От Варзуги до рыболовных баз организуется транспорт повышенной проходимости или вертолет.
          </p>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99173.87542332452!2d36.46867655!3d66.73320305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4438240c6f479c45%3A0xd95466bc8a2f5da0!2z0JLQsNGA0LfRg9Cz0LAsINCc0YPRgNC80LDQvdGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1650000000000!5m2!1sru!2sru" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Карта Варзуги"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-6 text-center">Наша команда</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {managers.map((manager, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="p-4 flex flex-col items-center text-center">
              <img 
                src={manager.photo} 
                alt={manager.name} 
                className="w-32 h-32 rounded-full object-cover mb-4" 
              />
              <h4 className="font-semibold text-lg">{manager.name}</h4>
              <p className="text-gray-500 mb-3">{manager.position}</p>
              <div className="space-y-2 w-full">
                <div className="flex items-center justify-center">
                  <Phone size={16} className="text-[#1EAEDB] mr-2" />
                  <span>{manager.phone}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail size={16} className="text-[#1EAEDB] mr-2" />
                  <span>{manager.email}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
