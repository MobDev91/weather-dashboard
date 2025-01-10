import { IBoxProps } from "@/interfaces";

function Box({
	children,
	Boxstyle,
	title,
	icon,
}: IBoxProps): JSX.Element {
	

	return (
		<div
			className={`${Boxstyle}`}
		>
			{title && (
				<h3 className="flex items-center gap-2 justify-center text-lg font-bold">
					{icon}
					{title}
				</h3>
			)}

			{children}
		</div>
	);
}

export default Box;
