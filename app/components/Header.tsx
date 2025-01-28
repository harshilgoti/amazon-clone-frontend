import Link from "next/link";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Amazon Clone
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/products" className="hover:text-blue-200">
            Products
          </Link>
          <Link href="/categories" className="hover:text-blue-200">
            Categories
          </Link>
          <Link href="/deals" className="hover:text-blue-200">
            Deals
          </Link>
        </nav>
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
