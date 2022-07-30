import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Styles: NextPageWithLayout = () => {
  return (
    <section className="max-w-7xl p-11 space-y-20">
      <div>
        <h2>Colors</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <div className="bg-black h-24 w-full rounded-lg" />
            <h4>Black(#0B0C0E)</h4>
          </div>
          <div>
            <div className="bg-grey-dark h-24 w-full rounded-lg" />
            <h4>Grey Dark(#3C3D3E)</h4>
          </div>
          <div>
            <div className="bg-grey-light h-24 w-full rounded-lg" />
            <h4>Grey Light(#C7D0D9)</h4>
          </div>
          <div>
            <div className="bg-offwhite h-24 w-full rounded-lg" />
            <h4>OffWhite(#F4F7FA)</h4>
          </div>
        </div>
      </div>

      <h1 className="display">Heading Display</h1>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p className="large">
        Paragraph-Large: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
      <p className="medium">
        Paragraph-Medium: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
      <p className="small">
        Paragraph-small: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
    </section>
  );
};

export default Styles;

Styles.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
