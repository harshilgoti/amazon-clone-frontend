"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchCategories, createCategory } from "@/store/slices/categorySlice";
import MainLayout from "@/components/MainLayout";

export default function ManageCategories() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { categories, isLoading, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createCategory({ name, description }));
    setName("");
    setDescription("");
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-5">Manage Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Add New Category</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Adding Category..." : "Add Category"}
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Existing Categories</h3>
            {isLoading ? (
              <p>Loading categories...</p>
            ) : (
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category._id} className="border p-2 rounded">
                    <h4 className="font-semibold">{category.name}</h4>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
