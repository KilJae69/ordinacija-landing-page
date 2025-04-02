/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const sendGAEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  try {
    if (typeof window !== "undefined") {
      console.log("Sending GA event:", eventName, eventParams);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  } catch (e) {
    console.error("GA Event Error:", e);
  }
};

// Common event types for better type safety
export const GAEvents = {
  ctaClick: (label: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cta_click", label });
  },
  videoPlay: (videoId: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "video_play", videoId });
  },
};
