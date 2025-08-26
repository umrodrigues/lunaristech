declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export interface GTMEvent {
  event: string;
  [key: string]: any;
}

export const sendGTMEvent = (event: GTMEvent): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.event, event);
  }
};

export const GTM_EVENTS = {
  PAGE_VIEW: 'page_view',
  CLICK: 'click',
  SCROLL: 'scroll',
  FORM_SUBMIT: 'form_submit',
  FORM_START: 'form_start',
  CONTACT_CLICK: 'contact_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  EMAIL_CLICK: 'email_click',
  SERVICE_VIEW: 'service_view',
  SERVICE_CLICK: 'service_click',
  CONVERSION: 'conversion',
  LEAD_GENERATION: 'lead_generation',
} as const;

export const trackContactClick = (method: 'whatsapp' | 'email' | 'phone', label?: string): void => {
  sendGTMEvent({
    event: GTM_EVENTS.CONTACT_CLICK,
    contact_method: method,
    contact_label: label || method,
  });
};

export const trackServiceView = (serviceName: string): void => {
  sendGTMEvent({
    event: GTM_EVENTS.SERVICE_VIEW,
    service_name: serviceName,
  });
};

export const trackServiceClick = (serviceName: string, action?: string): void => {
  sendGTMEvent({
    event: GTM_EVENTS.SERVICE_CLICK,
    service_name: serviceName,
    action: action || 'view_details',
  });
};

export const trackFormSubmit = (formName: string, formData?: Record<string, any>): void => {
  sendGTMEvent({
    event: GTM_EVENTS.FORM_SUBMIT,
    form_name: formName,
    form_data: formData,
  });
};

export const trackConversion = (conversionType: string, value?: number, currency?: string): void => {
  sendGTMEvent({
    event: GTM_EVENTS.CONVERSION,
    conversion_type: conversionType,
    value: value,
    currency: currency || 'BRL',
  });
};
