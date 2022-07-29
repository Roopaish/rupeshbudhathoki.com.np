import { ReactElement } from "react";

export interface IPrimaryLayout {
  children: ReactElement
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  );
};

export default PrimaryLayout;
