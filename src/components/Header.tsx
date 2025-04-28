
import React from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo-b.svg" alt="Логотип Варзуга-Тур" className="h-10" />
          <span className="text-xl font-semibold text-[#1EAEDB]">Варзуга-Тур</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">О реке</a>
          <a href="#fishing" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">Рыбалка</a>
          <a href="#gallery" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">Галерея</a>
          <a href="#contacts" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">Контакты</a>
        </nav>
        
        <Button className="bg-[#33C3F0] hover:bg-[#0FA0CE] text-white">
          +7 (921) 123-45-67
        </Button>
      </div>
    </header>
  );
};
