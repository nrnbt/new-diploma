"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Flowbite } from "flowbite-react";
import { FunctionComponent, HTMLAttributes } from "react";

interface ITMain extends HTMLAttributes<HTMLDivElement> {}

const queryClient = new QueryClient();

const TMain: FunctionComponent<ITMain> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Flowbite>
        <div className="flex  w-screen overflow-x-hidden min-h-screen flex-col justify-between bg-primary-200 dark:bg-dark-200 text-black dark:text-white">
          {children}
        </div>
      </Flowbite>
    </QueryClientProvider>
  );
};

export default TMain;
