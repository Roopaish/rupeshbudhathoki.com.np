import Container from '@/components/layouts/container/Container';
import Link from 'next/link';
import { headerLinks } from './links';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center">
          <p className="medium">
            <Link href="/">@Roopaish</Link>
          </p>
          <div className="flex items-center gap-10">
            {headerLinks.map((item) => (
              <p className="medium" key={item.url}>
                <a href={item.url}>{item.name}</a>
              </p>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
