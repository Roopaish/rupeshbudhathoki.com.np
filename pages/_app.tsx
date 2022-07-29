import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.getLayout || ((page) => page);

  return Layout(<Component {...pageProps} />);
}

export default MyApp;
