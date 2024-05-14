"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../header";
import { useRouter, useSearchParams } from "next/navigation";
import API from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { SideBar } from "./sidebar";
import CDynamicForm from "../form/dynamicForm";
let json = [
  {
    label: "name",
    name: "name",
    type: "string",
    inputtype: "text",
    required: true,
    listName: "role_name",
    listId: "id"
  },
  {
    label: "studentId",
    name: "studentId",
    type: "number",
    inputtype: "number",
    required: true,
    listName: "role_name",
    listId: "id"
  },
  {
    label: "teacherId",
    name: "teacherId",
    type: "number",
    inputtype: "number",
    required: true,
    listName: "role_name",
    listId: "id"
  },

  {
    label: "diploma",
    name: "diploma",
    type: "file",
    inputtype: "file",
    required: true,
    listName: "role_name",
    listId: "id"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <div className="flex ">
        <SideBar />
        <CDynamicForm
          name="diploma"
          url="/diploma/create"
          json={json}
          method="POST"
        />
      </div>
    </main>
  );
}
