import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Location() {
  const mapSrc = "https://www.openstreetmap.org/export/embed.html?bbox=-42.85,-2.78,-42.80,-2.74&layer=mapnik&marker=-2.7579,-42.8192";

  return (
    <section id="localizacao" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-green-800">Nossa Localização</h2>
          <p className="text-xl text-gray-600">
            Estamos em Barreirinhas, MA - Portal dos Lençóis Maranhenses
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Localização</h4>
                    <p className="text-gray-600">
                      Barreirinhas - MA<br />
                      Portal dos Lençóis Maranhenses<br />
                      Maranhão, Brasil
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Telefone / WhatsApp</h4>
                    <p className="text-gray-600">(98) 98720-7175</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">dfecoturismo54@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Todos os dias: 7h às 19h<br />
                      Whatsapp 24h para emergências<br />
                      Passeios diários
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"

              title="Localização DF Ecoturismo - Barreirinhas, MA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}