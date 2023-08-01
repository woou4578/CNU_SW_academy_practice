import "./Text.css";

const Text = ({
	children,
	block,
	paragraph,
	size,
	strong,
	underline,
	color,
	delete: del,
	mark,
	code,
	...props
}) => {
	const Tag = block ? "div" : paragraph ? "p" : "span";
	const fontStyle = {
		fontSize: typeof size === "number" ? size : undefined,
		fontWeight: strong ? "bold" : undefined,
		textDecoration: underline ? "underline" : undefined,
		color,
	};

	if (mark) {
		children = <mark>{children}</mark>;
	}
	if (code) {
		children = <code>{children}</code>;
	}
	if (del) {
		children = <del>{children}</del>;
	}
	return (
		<Tag
			className={
				typeof size === "string" ? `Text--size-${size}` : undefined
			}
			style={{ ...props.style, ...fontStyle }}
			{...props}
		>
			{children}
		</Tag>
	);
};

export default Text;
