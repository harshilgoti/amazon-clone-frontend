import { Suspense } from "react";
import ProductDetails from "@/components/ProductDetails";
import MainLayout from "@/components/MainLayout";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails id={id} />
      </Suspense>
    </MainLayout>
  );
}
