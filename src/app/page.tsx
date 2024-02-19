"use client";
import ProductDisplay from "@/components/ProductDisplay";
import { useSelector } from "react-redux";

export default function Home() {
  const pageViews = useSelector((state: any) => state.pages.pageViews);

  switch (pageViews) {
    case "home":
      return (
        <ProductDisplay />
      );
    case "bag":
      return (
        <main className="">
          bag
        </main>
      );
  }

}
