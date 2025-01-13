import { Link } from "react-router";

export default function JekkeyLayout() {
  return (
    <header className="h-24">
      <nav className="flex justify-between bg-transparent">
        <div className="text-white font-bold text-sm">JEKKEY</div>
        <div className="text-white text-sm uppercase">
          ARCHITECTURE PHOTOGRAPHY PORTFOLIO
        </div>
        <div className="flex justify-between">
          <Link to="/jekkey" className="text-sm text-white uppercase">
            Gallery
          </Link>
          <Link to="/jekkey" className="text-sm text-white uppercase">
            About
          </Link>
          <Link to="/jekkey" className="text-sm text-white uppercase">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
