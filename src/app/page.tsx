import Image from 'next/image';
/*import ThemeController from './components/ThemeController';*/

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='flex items-center justify-center text-3xl'>
        <Image
          className=''
          src='/MSK.svg'
          alt='MiMiC logo'
          width={180}
          height={180}
          priority
        />
        <h1 className=' text- text-[100px]'>Studio Mi&sup2;C</h1>
      </div>
    </div>
  );
}
