export interface IContainer {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IContainer> = ({ children, className }) => {
  return (
    <main
      className={`max-w-screen-xl mx-auto px-10 py-3 lg:px-20 lg:py-7 ${className}`}
    >
      {children}
    </main>
  );
};

export default Container;
