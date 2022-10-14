import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
// import '../styles/fonts.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, pageProps: any) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        {getLayout(<Component {...pageProps} />, pageProps)}
        <GlobalStyle />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
