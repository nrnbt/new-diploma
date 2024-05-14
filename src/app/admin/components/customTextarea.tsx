import { Label, Textarea } from "flowbite-react";

interface ICustomTextarea {
  label: string;
  value: string;
  setValue: (value: string) => void;
  classname?: string;
  name: string;
}

const CustomTextarea = ({
  label,
  value,
  setValue,
  classname,
  name,
}: ICustomTextarea) => {
  return (
    <div className={classname}>
      <Label htmlFor={label}>{label}</Label>
      <Textarea
        name={name}
        id={label}
        placeholder="e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz"
        rows={6}
        className="mt-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default CustomTextarea;
