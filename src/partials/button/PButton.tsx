import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";

interface IPButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
}

const PButton: FunctionComponent<IPButton> = ({
  children,
  className,
  ...attributes
}) => {
  return (
    <button
      className={cn(
        `rounded-[8px] flex px-[16px] py-[10px] shadow-md overflow-hidden text-center `,
        className
      )}
      {...attributes}>
      {children}
    </button>
  );
};

export default PButton;
