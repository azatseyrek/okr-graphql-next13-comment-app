import { Roboto, Teko } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const teko = Teko({
  weight: ['400', '700'],
  subsets: ['devanagari', 'latin'],
});
