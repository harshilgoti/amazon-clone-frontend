import Link from "next/link"

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 p-4 hidden md:block">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block hover:bg-gray-200 p-2 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/orders" className="block hover:bg-gray-200 p-2 rounded">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/wishlist" className="block hover:bg-gray-200 p-2 rounded">
              Wishlist
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block hover:bg-gray-200 p-2 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

