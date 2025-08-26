'use client';

import { useGTM } from './use-gtm';
import { trackContactClick, trackServiceClick } from './gtm-utils';

export const GTMExample = () => {
  const { trackClick, trackCTA, trackExternalLink } = useGTM();

  const handleContactClick = () => {
    trackContactClick('whatsapp', 'contato_principal');
    trackClick('whatsapp_button', 'contact', 'conversion');
  };

  const handleServiceClick = () => {
    trackServiceClick('desenvolvimento_web', 'view_details');
    trackClick('service_card', 'view_service', 'engagement');
  };

  const handleCTAClick = () => {
    trackCTA('Solicitar Orçamento', 'hero_section');
  };

  const handleExternalLinkClick = () => {
    trackExternalLink('https://github.com', 'GitHub Link');
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4">Exemplos de Rastreamento GTM</h3>
      
      <div className="space-y-3">
        <button
          onClick={handleContactClick}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Rastrear Clique WhatsApp
        </button>
        
        <button
          onClick={handleServiceClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Rastrear Clique Serviço
        </button>
        
        <button
          onClick={handleCTAClick}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Rastrear CTA
        </button>
        
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleExternalLinkClick}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 inline-block"
        >
          Rastrear Link Externo
        </a>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>Abra o DevTools → Console para ver os eventos sendo enviados</p>
        <p>Verifique também no Google Tag Manager Preview Mode</p>
      </div>
    </div>
  );
};
