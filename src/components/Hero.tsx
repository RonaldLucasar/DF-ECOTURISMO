import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5561999999999?text=Olá! Gostaria de saber mais sobre os passeios.', '_blank');
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1597034331361-0fad04cd0ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW5jb2lzJTIwbWFyYW5oZW5zZXMlMjBsYWdvb258ZW58MXx8fHwxNzY2MDAxOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-6 text-white">DF ECOTURISMO</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Descubra o paraíso dos Lençóis Maranhenses
        </p>
        <p className="text-lg mb-8 text-white/80">
          Passeios inesquecíveis pelas dunas brancas, lagoas cristalinas e praias desertas de Barreirinhas, MA. 
          Viva a experiência única de explorar um dos destinos mais espetaculares do Brasil!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8"
            onClick={handleWhatsAppClick}
          >
            <Phone className="mr-2 h-5 w-5" />
            Entre em Contato
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8"
            onClick={() => {
              document.getElementById('passeios')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Passeios
          </Button>
        </div>
      </div>
    </div>
  );
}