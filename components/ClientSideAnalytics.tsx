'use client';

import Script from 'next/script';

export default function ClientSideAnalytics() {
  return (
    <>
      <Script
        id="gtag-init"
        type="text/partytown"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z821ZH8DDP', {
              send_page_view: true,
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
          `,
        }}
      />
      <Script
        id="gtag-script"
        type="text/partytown"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Z821ZH8DDP"
      />
    </>
  );
}