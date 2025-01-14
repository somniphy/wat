import { Link, Outlet } from "react-router";

export default function JekkeyLayout() {
  return (
    <div>
      <header className="h-[88px] px-[32px] flex justify-between items-center bg-[#090909]">
        <Link to="/jekkey" className="text-white text-[20px] font-bold">
          JEKKEY®
        </Link>
        <p className="text-white uppercase text-[20px]">
          ARCHITECTURE PHOTOGRAPHY PORTFOLIO
        </p>
        <nav className="flex gap-[48px]">
          <Link to="jekkey" className="text-white uppercase text-[20px]">
            Gallery
          </Link>
          <Link to="jekkey" className="text-white uppercase text-[20px]">
            About
          </Link>
          <Link to="jekkey" className="text-white uppercase text-[20px]">
            Contact
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
