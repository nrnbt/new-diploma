import { Label, TextInput } from "flowbite-react";
import {
  Dispatch,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  SetStateAction
} from "react";

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute | undefined;
}

const CustomInput = ({
  label,
  name,
  type = "text",
  ...props
}: ICustomInput) => {
  console.log(label, name, type);
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <TextInput
        {...props}
        id={label}
        placeholder={label}
        name={name}
        type={type}
        className="mt-1"
      />
    </div>
  );
};

export default CustomInput;
