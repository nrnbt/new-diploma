import Image from "next/image";

const EmptyState = () => {
  return (
    <div className="w-full px-10 py-4 bg-white dark:bg-gray-600 shadow-lg">
      <div className="flex flex-col justify-center py-12 items-center">
        <div className="flex justify-center items-center">
          <Image
            className="w-64 h-64"
            src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690257804/jjqw2hfv0t6karxdeq1s.svg"
            alt="image empty states"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-gray-700 dark:text-white font-medium text-2xl text-center mb-3">
          There is no data.
        </h1>
        <p className="text-gray-500 dark:text-gray-100 text-center mb-6">
          You can add data by clicking the {'"'}Create product{'"'} button
        </p>
        {/* <div className="flex flex-col justify-center">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6  mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Create New Project
          </button>
          <a href="#" className="underline mt-4 text-sm font-light mx-auto">
            Learn more
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default EmptyState;
