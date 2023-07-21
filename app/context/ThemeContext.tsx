// 'use client';

// import CssBaseLine from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// import { NextAppDirEmotionCacheProvider } from '@context/EmotionContext';
import { theme } from '@lib/light-theme';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    // <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
    <ThemeProvider theme={theme}>
      {/* <CssBaseLine /> */}
      {children}
    </ThemeProvider>
    // </NextAppDirEmotionCacheProvider>
  );
}
