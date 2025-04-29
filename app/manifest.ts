import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OrdinacijaCMS | Digitalno upravljanje medicinskom praksom',
    short_name: 'Ordinacija CMS',
    description: 'OrdinacijaCMS je moderna SaaS platforma koja omogućava jednostavno upravljanje pacijentima, zakazivanjem termina i medicinskom dokumentacijom – sve na jednom mjestu.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#24ae7c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}