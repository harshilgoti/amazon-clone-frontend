"use client";
import type React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import type { RootState, AppDispatch } from "../store/store";
import { logout } from "../store/slices/authSlice";
// import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Amazon Clone
          </Link>
          <div className="space-x-4">
            <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
            {user ? (
              <>
                <Link href="/profile" className="hover:text-gray-300">
                  Profile
                </Link>
                <button onClick={handleLogout} className="hover:text-gray-300">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:text-gray-300">
                  Login
                </Link>
                <Link href="/register" className="hover:text-gray-300">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
