"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchProducts } from "@/store/slices/productSlice";
import MainLayout from "@/components/MainLayout";

export default function MerchantDashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { products, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <MainLayout>
        <div>Loading...</div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div>Error: {error}</div>
      </MainLayout>
    );
  }

  const merchantProducts = products.filter(
    (product) => product.merchant === user?.id
  );

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Merchant Dashboard</h1>
        <div className="mb-6">
          <Link
            href="/merchant/add-product"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add New Product
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-4">Your Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {merchantProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="text-lg font-bold mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Stock: {product.stock}
                </p>
                <Link
                  href={`/merchant/edit-product/${product._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                >
                  Edit
                </Link>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
