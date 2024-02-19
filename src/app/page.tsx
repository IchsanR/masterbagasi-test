"use client";
import { useSelector } from "react-redux";

export default function Home() {
  const pageViews = useSelector((state: any) => state.pages.pageViews);

  switch (pageViews) {
    case "home":
      return (
        <main className="">
          home
        </main>
      );
    case "bag":
      return (
        <main className="">
          bag
        </main>
      );
  }

}
