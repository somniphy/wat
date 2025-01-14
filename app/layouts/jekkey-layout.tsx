import { Link, Outlet } from "react-router";

export default function JekkeyLayout() {
  return (
    <div>
      <header className="h-[88px] px-[32px] flex justify-between items-center bg-[#090909] w-screen max-w-[1440px]">
        <Link to="/jekkey" className="text-white text-md font-bold">
          JEKKEY®
        </Link>
        <p className="text-white uppercase text-md">
          ARCHITECTURE PHOTOGRAPHY PORTFOLIO
        </p>
        <nav className="flex gap-[48px]">
          <Link to="jekkey" className="text-white uppercase text-md">
            Gallery
          </Link>
          <Link to="jekkey" className="text-white uppercase text-md">
            About
          </Link>
          <Link to="jekkey" className="text-white uppercase text-md">
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
