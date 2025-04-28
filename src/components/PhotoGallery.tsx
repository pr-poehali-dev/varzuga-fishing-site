
import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1542261777448-23d2a287091c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Рыбак на реке Варзуга",
    title: "Рыбалка на закате"
  },
  {
    url: "https://images.unsplash.com/photo-1595503240812-7286dafaddc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Пойманная сёмга",
    title: "Трофейный улов"
  },
  {
    url: "https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Живописные пейзажи Кольского полуострова",
    title: "Красота природы"
  },
  {
    url: "https://images.unsplash.com/photo-1549746423-a5d0c0fd4c3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Рыболовный лагерь на берегу",
    title: "Наш лагерь"
  },
  {
    url: "https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Нахлыстовая рыбалка на реке",
    title: "Мастерство нахлыста"
  },
  {
    url: "https://images.unsplash.com/photo-1573351105585-03eafb5f93f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Вечер у костра после рыбалки",
    title: "Отдых после удачного дня"
  }
];

export const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Галерея</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-1">
              <AspectRatio ratio={4/3}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-md"
                />
              </AspectRatio>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg">{image.title}</h3>
              <p className="text-gray-500 text-sm">{image.alt}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
