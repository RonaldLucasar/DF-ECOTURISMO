import React from "react";
import { Clock, TrendingUp, Tag } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  difficulty: string;
  price: string;
}

interface TourCardProps {
  tour: Tour;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "fácil":
      return "bg-green-100 text-green-800";
    case "moderada":
      return "bg-yellow-100 text-yellow-800";
    case "difícil":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function TourCard({ tour }: TourCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de saber mais sobre o passeio: ${tour.title}`;
    window.open(
      `https://wa.me/559887207175?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <Badge
          className={`absolute top-4 right-4 ${getDifficultyColor(tour.difficulty)}`}
        >
          {tour.difficulty}
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="text-2xl mb-3 text-gray-900">
          {tour.title}
        </h3>
        <p className="text-gray-600 mb-4">{tour.description}</p>

        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <Clock className="w-4 h-4 mr-2 text-green-600" />
            <span>{tour.duration}</span>
          </div>

          <div className="flex items-center text-gray-700">
            <Tag className="w-4 h-4 mr-2 text-green-600" />
            <span className="text-green-700">{tour.price}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full bg-green-600 hover:bg-green-700"
          onClick={handleWhatsAppClick}
        >
          Reservar Agora
        </Button>
      </CardFooter>
    </Card>
  );
}