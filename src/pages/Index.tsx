
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1516293635722-a0ae5ec1ad9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
            filter: "brightness(0.7)" 
          }}
        />
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Рыбалка на реке Варзуга</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Незабываемое приключение на Кольском полуострове</p>
          <Button size="lg" className="bg-[#33C3F0] hover:bg-[#0FA0CE] text-white">Забронировать тур</Button>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <AboutSection />
        <Separator className="my-12" />
        <PhotoGallery />
        <Separator className="my-12" />
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
