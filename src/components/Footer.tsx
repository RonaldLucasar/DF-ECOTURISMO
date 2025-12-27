import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-4">DF ECOTURISMO</h3>
            <p className="text-green-100 mb-4">
              Proporcionando experiências únicas em contato com a natureza dos Lençóis Maranhenses desde 2015.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/_dfecoturismo_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <a href="#passeios" className="hover:text-white transition-colors">
                  Nossos Passeios
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Cancelamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl mb-4">Contato</h4>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(98) 98720-7175</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>dfecoturismo54@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 pt-8 text-center text-green-100">
          <p>&copy; {currentYear} DF Ecoturismo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}