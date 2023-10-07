import { next } from '@vercel/edge';

export default function middleware(req) {
  return next({
    headers: {
      Content-Security-Policy: frame-ancestors 'self' https://sites.google.com/view/idkg4mes/home;
      'Referrer-Policy': 'origin-when-cross-origin',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'X-DNS-Prefetch-Control': 'on',
      'Strict-Transport-Security':
        'max-age=31536000; includeSubDomains; preload',
    },
  });
}
