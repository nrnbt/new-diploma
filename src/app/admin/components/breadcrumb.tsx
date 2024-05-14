"use client";
import { usePathname } from "next/navigation";
import { FunctionComponent, HTMLAttributes } from "react";

interface IPbreadcrumb extends HTMLAttributes<HTMLDivElement> {
  pathname: Array<string> | string[];
}

const PBreadcrumb: FunctionComponent<IPbreadcrumb> = ({
  className,
  pathname,
  ...attr
}) => {
  return (
    <div
      className={`flex  py-2 px-4 font-semibold text-black dark:text-white flex-row items-center mt-[78px] gap-1 ${className}`}
      {...attr}>
      {pathname.map((path, index) => (
        <div key={index} className="text-lg flex items-center">
          <div className="hover:underline">
            {path === "" ? "Dashboard" : path}
          </div>
          <span className="px-1 ">/</span>
        </div>
      ))}
    </div>
  );
};

export default PBreadcrumb;
