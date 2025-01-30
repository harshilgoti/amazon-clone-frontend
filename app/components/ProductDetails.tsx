"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { fetchProduct } from "../store/slices/productSlice";

export default function ProductDetails({ id }: { id: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const { product, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-2">Category: {product.category}</p>
          <p className="mb-2">Seller: {product.merchant.name}</p>
          <p className="mb-4">In Stock: {product.stock}</p>
          <div className="flex items-center mb-4">
            <span className="mr-2">Rating:</span>
            <span className="text-yellow-500">
              {"\u2605".repeat(Math.round(product.averageRating || 0))}
            </span>
            <span className="text-gray-400">
              {"\u2605".repeat(5 - Math.round(product.averageRating || 0))}
            </span>
            <span className="ml-2">({product.numReviews || 0} reviews)</span>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
