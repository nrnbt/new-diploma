import { HiUpload } from "react-icons/hi";

interface IFileUpload {
  classname: string;
}

const FileUpload = ({ classname }: IFileUpload) => {
  return (
    <div className={classname}>
      <div className="flex w-full items-center justify-center">
        <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <HiUpload className="text-4xl text-gray-300" />
            <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
              Upload a file or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
