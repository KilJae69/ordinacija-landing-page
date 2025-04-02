/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const sendGAEvent = (eventName: string, eventParams?: Record<string, any>) => {
    try {
      if (typeof window !== 'undefined') {
        console.log('Sending GA event:', eventName, eventParams);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: eventName,
          ...eventParams
        });
      }
    } catch (e) {
      console.error('GA Event Error:', e);
    }
  };

// Common event types for better type safety
export const GAEvents = {
  buttonClick: (label: string) => sendGAEvent('button_click', { button_label: label }),
  videoPlay: (videoId: string) => sendGAEvent('video_play', { video_id: videoId }),
  formSubmit: (formName: string) => sendGAEvent('form_submit', { form_name: formName }),
  ctaClick: (ctaText: string) => sendGAEvent('cta_click', { cta_text: ctaText })
};