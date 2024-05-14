import { FunctionComponent, HTMLAttributes } from "react";

interface ITContainer extends HTMLAttributes<HTMLDivElement> {}

const TContainer: FunctionComponent<ITContainer> = ({
	children,
	className
}) => {
	return <div className={`m-auto container ${className}`}>{children}</div>;
};

export default TContainer;
