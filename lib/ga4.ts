/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const sendGAEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  } else {
    console.warn('GA4 not loaded yet, queuing event:', eventName, eventParams);
    // Queue events if GA4 isn't loaded yet
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': eventName,
      ...eventParams
    });
  }
};

// Common event types for better type safety
export const GAEvents = {
  buttonClick: (label: string) => sendGAEvent('button_click', { button_label: label }),
  videoPlay: (videoId: string) => sendGAEvent('video_play', { video_id: videoId }),
  formSubmit: (formName: string) => sendGAEvent('form_submit', { form_name: formName }),
  ctaClick: (ctaText: string) => sendGAEvent('cta_click', { cta_text: ctaText })
};