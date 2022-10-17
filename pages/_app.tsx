import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import '../styles/font.css';

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
      <ThemeProvider theme={darkTheme}>
        {getLayout(<Component {...pageProps} />, pageProps)}
        <GlobalStyle />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
