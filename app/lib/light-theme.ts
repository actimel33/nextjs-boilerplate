'use client';

import { teal } from '@mui/material/colors';
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

declare module '@mui/material/styles' {
  interface Theme {
    header: {
      height: number;
    };
    animation: (
      duration: number,
      easing: string,
    ) => {
      duration: number;
      easing: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    header: {
      height: number;
    };
    animation: (
      duration: number,
      easing: string,
    ) => {
      duration: number;
      easing: string;
    };
  }
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 1100,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: teal[900],
    },
    secondary: {
      main: '#f0f4c3',
    },
  },
  header: { height: 60 },
  animation: (duration, easing) => ({
    duration,
    easing,
  }),
};

export const theme = createTheme(themeOptions);
