"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../header";
import { useRouter, useSearchParams } from "next/navigation";
import API from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const search = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Enter") {
        // Redirect to /diploma?search=searchText
        router.push(`/diploma?search=${searchText}`);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchText, router]);
  const {
    data: diplomas,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["diploma"],
    queryFn: async () => {
      const searchParam = search?.get("search") || ""; // Default to empty string if search parameter is not provided
      const response = await API({
        url: `/diploma?timestamp=${Date.now()}&search=${searchParam}`
      });
      return response;
    }
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <section className="py-12 bg-gray-100 px-10 m-auto container">
        <div className="container mx-auto">
          <div className=" text-center flex flex-col gap-10 items-center ">
            <div>
              <h2 className="text-2xl font-semibold">Шинэ Монгол Технологийн Дээд Сургууль</h2>
              <p className="mt-4">
                МЭДЛЭГЭЭ БҮТЭЭГДЭХҮҮН БОЛГОЁ
              </p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Enter search text and press Enter..."
                className="mt-4 p-2 border border-gray-300 rounded"
              />
              <button onClick={() => setSearchText(searchText)}>Хйах</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100 px-10 m-auto container">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Check if diplomas is loading */}
            {isLoading ? (
              <p>Loading diplomas...</p>
            ) : isError ? (
              <p>Error fetching diplomas.</p>
            ) : (
              // Map over diplomas and render each diploma item
              diplomas.map((diploma: any) => (
                <div key={diploma.id} className="flex gap-10 w-full">
                  <div>{diploma.name}</div>
                  <div className="w-full">
                    <h2 className="text-2xl font-semibold">{diploma.name}</h2>
                    <p>Student ID: {diploma.studentId}</p>
                    <p>Teacher ID: {diploma.teacherId}</p>
                    <p>Status: {diploma.status}</p>
                    <p>Final Points: {diploma.finalPoints}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
