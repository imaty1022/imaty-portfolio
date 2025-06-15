import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 h-16 flex items-center px-4">
      <div className="flex-1 font-bold text-xl text-primary">今井 大祥 Portfolio</div>
      <Navigation />
    </header>
  );
}
