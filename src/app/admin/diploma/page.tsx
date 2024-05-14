"use client";

import { Button } from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import {
  HiDocumentDownload,
  HiDotsVertical,
  HiExclamationCircle,
  HiTrash,
  HiCog
} from "react-icons/hi";
import NavbarSidebarLayout from "../components/navbar-sidebar";
import Pagination from "../components/pagination";
import PathTitle from "../components/pathTitle";
import Search from "../components/search";
import { useQuery } from "@tanstack/react-query";
import API from "@/utils/api";
import CDynamicForm from "@/app/form/dynamicForm";
import CTable from "../components/table";

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

const DiplomaListPage: FC = function () {
  const [search, setSearch] = useState<string>("");

  const {
    data: users,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await API({
        url: "/diploma?timestamp=" + Date.now()
      });
      return response;
    },
    retry: 3
  });

  const headers = [
    {
      label: "Id",
      colspan: "id",
      name: "id"
    },
    {
      label: "name",
      colspan: "name",
      name: "name"
    },
    {
      label: "sdutend",
      colspan: "studentId",
      name: "studentId"
    },
    {
      label: "teacherId",
      colspan: "teacherId",
      name: "teacherId"
    },
    {
      label: "file",
      colspan: "file",
      name: "file"
    }
  ];

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <PathTitle title="Users" />
          <div className="sm:flex">
            <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
              <Search value={search} setValue={setSearch} placeholder="users" />
              <div className="mt-3 flex space-x-1 pl-0 sm:mt-0 sm:pl-2">
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Configure</span>
                  <HiCog className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Delete</span>
                  <HiTrash className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Purge</span>
                  <HiExclamationCircle className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Settings</span>
                  <HiDotsVertical className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
              <CDynamicForm
                name="diploma"
                url="/diploma/create"
                json={json}
                method="POST"
              />
              <Button className="bg-blue-700">
                <div className="flex items-center gap-x-3">
                  <HiDocumentDownload className="text-xl" />
                  <span>Export</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CTable
        datas={users}
        heads={headers}
        json={json}
        name="diploma"
        actions
        isLoading={isLoading}
      />
    </NavbarSidebarLayout>
  );
};

export default DiplomaListPage;
