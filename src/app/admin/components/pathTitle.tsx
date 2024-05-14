import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const PathTitle = ({ title }: { title: string }) => {
  return (
    <div className="mb-4">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="/admin/dashboard">
          <div className="flex items-center gap-x-3">
            <HiHome className="text-xl" />
            <span className="dark:text-white">Home</span>
          </div>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
        All {title}
      </h1>
    </div>
  );
};

export default PathTitle;
