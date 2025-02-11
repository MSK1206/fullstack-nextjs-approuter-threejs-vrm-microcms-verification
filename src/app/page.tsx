import ThemeController from "./components/ThemeController";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div>
        <ThemeController />
      </div>
      <div className='flex flex-col items-center justify-center text-3xl'>
        <h1>Mi²C</h1>
        <h1>Studio</h1>
      </div>
    </div>
  );
}
