
import { M_PLUS_1, Sawarabi_Mincho , Tektur, Public_Sans, Orbitron } from 'next/font/google';

export const tektur = Tektur({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-tektur',
});

export const publicSans = Public_Sans({
  subsets: ['latin'],  
  weight: ['100', '200', '300', '400', '500' ],  
  variable: '--font-public-sans',  
});

export const sawarabiMincho = Sawarabi_Mincho({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-sawarabi-mincho',
});

export const mplus1 = M_PLUS_1({
  subsets: ['latin'],
  weight: ['700', '900'], 
  variable: '--font-mplus-1p',
});

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600'], 
  variable: '--font-orbitron',
});



// KALASH NOT AVAIL IN GFONT, USE LOCAL APPROACH AND DONT FORGET TO BE OPTIMIZED FOR LOAD SPEED

// export const kalash = Kalash({
//   subsets: ['latin'],
//   weight: ['900'], 
// //   heavy
//   variable: '--font-sawarabi-mincho',
// });


