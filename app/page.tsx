import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
            <p>Check out our latest and most popular items!</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Special Offers</h2>
            <p>Don&apos;t miss out on these amazing deals!</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            <p>Browse our wide range of product categories.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
