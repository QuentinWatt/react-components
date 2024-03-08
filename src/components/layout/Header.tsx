import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="border-b bg-white">
      <nav className="container mx-auto px-3">
        <div className="flex justify-between items-center h-16">
          <span className="font-bold text-3xl">Qcasts</span>
          <ul className="flex items-center">
            <li className="mr-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-2">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
