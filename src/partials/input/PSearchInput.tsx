import { FunctionComponent, InputHTMLAttributes } from "react";
import PInput from "./PInput";

interface IPSearchInput extends InputHTMLAttributes<HTMLInputElement> {}

const PSearchInput: FunctionComponent<IPSearchInput> = ({
	className,
	...attr
}) => {
	return <PInput type="text" className={`${className}`} {...attr} />;
};

export default PSearchInput;
