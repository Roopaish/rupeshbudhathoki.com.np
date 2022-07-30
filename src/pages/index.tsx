import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-grey-light min-h-screen relative">
      <div className="overflow-hidden">
        <h1 className="display whitespace-nowrap text-offwhite">
          Cross Platform Fullstack Web/App Developer
        </h1>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
