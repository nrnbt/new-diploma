import { Table } from "flowbite-react";

const TableLoader = () => {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
        <Table.Row
          className="hover:bg-gray-100 dark:hover:bg-gray-700"
          key={val}
        >
          <Table.Cell className="w-4 p-4">
            <div className="w-3 h-3 bg-gray-200 rounded-sm animate-pulse"></div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            <div className="w-full h-5 bg-gray-200 rounded-md animate-pulse mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            <div className="w-1/2 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            <div className="w-1/2 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            <div className="w-1/2 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          </Table.Cell>
          <Table.Cell className="space-x-2 whitespace-nowrap p-4">
            <div className="flex items-center gap-x-3">
              <div className="w-1/4 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-1/4 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};

export default TableLoader;
