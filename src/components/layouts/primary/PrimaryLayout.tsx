import Footer from '@/components/navigation/footer/Footer';
import Header from '@/components/navigation/header/Header';
import { ReactElement } from 'react';

export interface IPrimaryLayout {
  children: ReactElement;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PrimaryLayout;
