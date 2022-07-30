import Image from 'next/image';

export interface IAvatar {
  image?: string;
  size?: 'small' | 'big';
}

const Avatar: React.FC<IAvatar> = ({
  image = 'https://avatars.githubusercontent.com/u/54392112?v=4',
  size = 'big',
}) => {
  const sizeClass = size === 'big' ? 'w-64 h-64' : 'w-20 h-20';

  return (
    <div className={`rounded-full overflow-hidden ${sizeClass} `}>
      <Image
        src={image}
        alt="avatar"
        height={256}
        width={256}
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
