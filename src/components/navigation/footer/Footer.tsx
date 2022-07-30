import Avatar from '@/components/avatar/Avatar';
import Container from '@/components/layouts/container/Container';
import { socialLinks } from './links';

export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="bg-black">
      <Container className="lg:pt-20">
        <div className="flex justify-between items-center">
          <div className="text-offwhite">
            <h2>Have something in mind?</h2>
            <div className="flex gap-3 items-center">
              <Avatar size="small" />
              <h2>let&apos;s build it together.</h2>
            </div>
          </div>
          <button className="bg-offwhite py-6 px-12 rounded-full">
            <p className="medium leading-none">Get in touch</p>
          </button>
        </div>

        <div className="mt-32 text-grey-light flex justify-between items-center">
          <p className="medium">Build with 💜 by Rupesh </p>
          <div className="flex gap-8 ">
            {socialLinks.map((item) => (
              <p className="medium" key={item.url}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </p>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
