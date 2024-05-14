import { FunctionComponent, InputHTMLAttributes } from "react";

interface IPTextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
  isRequired?: boolean;
}

const PTextArea: FunctionComponent<IPTextArea> = ({
  isRequired = false,
  className,
  ...attr
}) => {
  return (
    <textarea
      type="text"
      className={`focus-visible::none px-2 py-1 bg-primary-100 dark:bg-dark-400 active: dark:placeholder-white focus:outline-primary-600 outline-primary-600 dark:outline-dark-600 focus:ring-0 focus:border-none dark:focus:outline-dark-600 ring-primary-600 dark:ring-dark-600 rounded-lg overflow-hidden ${className}`}
      {...attr}
      required={isRequired}
    />
  );
};

export default PTextArea;
