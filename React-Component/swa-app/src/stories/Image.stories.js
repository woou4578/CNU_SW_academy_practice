import Image from "../components/Image";

export default {
	title: "Component/Image",
	component: Image,
	argTypes: {
		block: {
			defaultValue: false,
			control: { type: "boolean" },
		},
		src: {
			type: { name: "string", require: true },
			defaultValue: "https://picsum.photos/200",
			control: { type: "text" },
		},
		width: {
			defaultValue: 200,
			control: { type: "range", min: 200, max: 600 },
		},
		height: {
			defaultValue: 200,
			control: { type: "range", min: 200, max: 600 },
		},
		alt: {
			control: "string",
		},
		mode: {
			defaultValue: "cover",
			options: ["cover", "fill", "contain"],
			control: { type: "inline-radio" },
		},
	},
};

export const Default = (args) => {
	return <>
        <Image {...args} />
        <Image {...args} />
    </>
};
