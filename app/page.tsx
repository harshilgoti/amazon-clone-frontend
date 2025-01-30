"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchProducts } from "@/store/slices/productSlice";
import { fetchCategories } from "@/store/slices/categorySlice";
import MainLayout from "@/components/MainLayout";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading: productsLoading } = useSelector(
    (state: RootState) => state.products
  );
  const { categories, isLoading: categoriesLoading } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (productsLoading || categoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
            <ul>
              {products.slice(0, 5).map((product) => (
                <li key={product._id} className="mb-2">
                  <Link
                    href={`/products/${product._id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            <ul>
              {categories.map((category) => (
                <li key={category._id} className="mb-2">
                  <Link
                    href={`/categories/${category._id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">For Merchants</h2>
            <p className="mb-4">
              Sign up as a merchant and start selling your products today!
            </p>
            <Link
              href="/merchant/register"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Become a Merchant
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
