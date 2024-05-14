"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../header";
import { useRouter, useSearchParams } from "next/navigation";
import API from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { SideBar } from "./sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <SideBar />
    </main>
  );
}
