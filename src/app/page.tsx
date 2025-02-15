import ThemeController from './components/ThemeController';
import MimicLogo from './components/MimicLogo';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <ThemeController />
      <div className='flex items-center justify-center text-3xl'>
        <div className='fill-current p-4'>
          <MimicLogo />
        </div>
        <h1 className='text-[100px] drop-shadow-2xl'>Studio Mi&sup2;C</h1>
      </div>
    </div>
  );
}
