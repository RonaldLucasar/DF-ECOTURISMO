import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Location() {
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
                    <p className="text-gray-600">(61) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@dfecoturismo.com.br</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127182.85076849398!2d-42.90574738476563!3d-2.757499500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f0c9f92e8b3e8f%3A0x2c8f8f8f8f8f8f8f!2sBarreirinhas%2C%20MA!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização DF Ecoturismo - Barreirinhas, MA"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}