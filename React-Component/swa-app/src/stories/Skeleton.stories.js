import Skeleton from "../components/Skeleton";

export default {
	title: "Component/Skeleton",
};

export const Box = (args) => <Skeleton.Box {...args} />;
Box.argTypes = {
	width: { control: "number" },
	height: { control: "number" },
};
Box.args = {
	width: 200,
	height: 100,
};

export const Circle = (args) => <Skeleton.Circle {...args} />;
Circle.argTypes = {
	size: { control: "number" },
};
Circle.args = {
	size: 200,
};

export const Paragraph = (args) => <Skeleton.Paragraph {...args} />;
Paragraph.argTypes = {
	size: { control: "number" },
};
Paragraph.args = {
	size: 200,
};

export const Sample = () => {
	return (
		<>
			<div style={{ float: "left", marginRight: 16 }}>
				<Skeleton.Circle size={60} />
			</div>
			<div style={{ float: "left", width: "80%" }}>
				<Skeleton.Paragraph line={4} />
			</div>
			<div style={{ clear: "both" }} />
		</>
	);
};
