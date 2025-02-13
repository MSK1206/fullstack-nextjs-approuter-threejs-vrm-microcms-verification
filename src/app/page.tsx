import Image from 'next/image';
import ThemeController from './components/ThemeController';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <ThemeController />
      <div className='flex flex-col items-center justify-center text-3xl'>
        <Image
          className='dark:invert dark:text-base-content'
          src='/MSK.svg'
          alt='MiMiC logo'
          width={180}
          height={38}
          priority
        />
        <h1 className='text-2xl'>Studio</h1>
        <h1 className='text-4xl'>Mi²C</h1>
      </div>
    </div>
  );
}
