// lib/ga.ts

declare global {
    interface Window {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      gtag?: (...args: any[]) => void;
    }
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sendCustomEvent(eventType: string, eventAction: string, eventParams: Record<string, any>) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag(eventType, eventAction, eventParams);
    } else {
      console.warn('gtag is not available');
    }
  }
  
