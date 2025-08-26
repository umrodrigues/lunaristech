'use client';

import { useCallback } from 'react';
import { sendGTMEvent, GTMEvent, GTM_EVENTS } from './gtm-utils';

export const useGTM = () => {
  const sendEvent = useCallback((event: GTMEvent) => {
    sendGTMEvent(event);
  }, []);

  const trackClick = useCallback((element: string, action?: string, category?: string) => {
    sendGTMEvent({
      event: GTM_EVENTS.CLICK,
      element,
      action: action || 'click',
      category: category || 'engagement',
    });
  }, []);

  const trackPageView = useCallback((page: string, title?: string) => {
    sendGTMEvent({
      event: GTM_EVENTS.PAGE_VIEW,
      page,
      title: title || page,
    });
  }, []);

  const trackScroll = useCallback((depth: number) => {
    sendGTMEvent({
      event: GTM_EVENTS.SCROLL,
      scroll_depth: depth,
    });
  }, []);

  const trackTimeOnPage = useCallback((timeInSeconds: number) => {
    sendGTMEvent({
      event: 'time_on_page',
      time_in_seconds: timeInSeconds,
    });
  }, []);

  const trackDownload = useCallback((fileName: string, fileType: string) => {
    sendGTMEvent({
      event: 'download',
      file_name: fileName,
      file_type: fileType,
    });
  }, []);

  const trackExternalLink = useCallback((url: string, linkText?: string) => {
    sendGTMEvent({
      event: 'external_link_click',
      external_url: url,
      link_text: linkText || 'external_link',
    });
  }, []);

  const trackCTA = useCallback((ctaText: string, ctaLocation: string) => {
    sendGTMEvent({
      event: 'cta_click',
      cta_text: ctaText,
      cta_location: ctaLocation,
    });
  }, []);

  return {
    sendEvent,
    trackClick,
    trackPageView,
    trackScroll,
    trackTimeOnPage,
    trackDownload,
    trackExternalLink,
    trackCTA,
  };
};
