import React from 'react';
import { TourCard } from './TourCard';

const tours = [
  {
    id: 1,
    title: 'CIRCUITO PRAIA DO CABURÉ',
    description: 'Viagem de lancha pelo Rio Preguiças até a paradisíaca Praia do Caburé, com paradas em Mandacaru e Pequenos Lençóis. Um dia completo explorando a costa maranhense.',
    image: 'https://images.unsplash.com/photo-1566296942542-b15c4da81c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwbWFyYW5oYW98ZW58MXx8fHwxNzY2MDAxOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '7 horas',
    difficulty: 'Fácil',
    price: 'R$ 150 - R$ 160'
  },
  {
    id: 2,
    title: 'Trekking de 1 a 3 dias',
    description: 'Aventura épica atravessando os Lençóis Maranhenses a pé. Caminhe pelas dunas infinitas, lagoas cristalinas e vilas tradicionais. Uma experiência única e inesquecível.',
    image: 'https://images.unsplash.com/photo-1761207215128-229b6f8c1174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVra2luZyUyMGRlc2VydCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjYwMDE5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '1 a 3 dias',
    difficulty: 'Difícil',
    price: 'R$ 1.500 - R$ 1.900'
  },
  {
    id: 3,
    title: 'LAGOA AZUL / LAGOA DO PEIXE & LAGOA DA PREGUIÇA',
    description: 'Passeio clássico pelas lagoas mais famosas dos Lençóis Maranhenses. Águas cristalinas de cor azul turquesa cercadas por dunas brancas. Um verdadeiro paraíso na terra.',
    image: 'https://images.unsplash.com/photo-1597034331361-0fad04cd0ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW5jb2lzJTIwbWFyYW5oZW5zZXMlMjBsYWdvb258ZW58MXx8fHwxNzY2MDAxOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4 horas',
    difficulty: 'Fácil',
    price: 'R$ 120 - R$ 170'
  },
  {
    id: 4,
    title: 'PASSEIO DE QUADRICICLO',
    description: 'Adrenalina pura! Pilote quadriciclos pelas dunas dos Lençóis Maranhenses, visitando lagoas escondidas e paisagens espetaculares. Para os aventureiros de plantão.',
    image: 'https://images.unsplash.com/photo-1762538190462-0a70f7a20612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFkcmljaWNsbyUyMGR1bmVzJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2NjAwMTkzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '8 horas',
    difficulty: 'Moderada',
    price: 'R$ 520 - R$ 650'
  },
  {
    id: 5,
    title: 'CIRCUITO DO ATINS',
    description: 'Descubra o paraíso escondido de Atins e suas praias desertas. Passeio completo pela vila de pescadores, dunas selvagens e encontro do rio com o mar.',
    image: 'https://images.unsplash.com/photo-1550318692-698677192cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW5jb2lzJTIwbWFyYW5oZW5zZXMlMjBkdW5lc3xlbnwxfHx8fDE3NjYwMDE5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '8h30',
    difficulty: 'Moderada',
    price: 'R$ 180 - R$ 250'
  },
  {
    id: 6,
    title: 'CARDOSA BOIA CROSS',
    description: 'Relaxe descendo o cristalino Rio Formigas em boias, observando a vegetação nativa da chapada maranhense. Perfeito para o último dia na região.',
    image: 'https://images.unsplash.com/photo-1657985022166-0326dd41260d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMGZsb2F0aW5nJTIwYm9pYXxlbnwxfHx8fDE3NjYwMDE5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4 horas',
    difficulty: 'Fácil',
    price: 'R$ 120 - R$ 130'
  },
  {
    id: 7,
    title: 'SOBREVÔO',
    description: 'Veja os Lençóis Maranhenses de cima! Voos panorâmicos com 4 rotas diferentes. Contemple as dunas infinitas, lagoas azuis e a imensidão deste deserto brasileiro único.',
    image: 'https://images.unsplash.com/photo-1689770429297-bb8488af924c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwZGVzZXJ0JTIwZHVuZXN8ZW58MXx8fHwxNzY2MDAxOTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '30min a 1h',
    difficulty: 'Fácil',
    price: 'R$ 950 - R$ 1.800'
  }
];

export function TourCatalog() {
  return (
    <section id="passeios" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-green-800">Nossos Passeios</h2>
          <p className="text-xl text-gray-600">
            Explore as maravilhas dos Lençóis Maranhenses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}