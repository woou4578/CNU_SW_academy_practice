import Badge from "../components/Badge";
import Image from "../components/Image";

// storybook defaultValue 안 먹힐 때 검색해보니
// 아래와 같이 argsTypes 와 args를 따로 설정하면 된다.

export default {
	title: "Component/Badge",
	component: Badge,
	argTypes: {
		count: { control: "number" },
		maxCount: { control: "number" },
		backgroundColor: { control: "color" },
		textColor: { control: "color" },
		showZero: { control: "boolean" },
	},
	args: {
		count: 10,
		maxCount: 100,
		showZero: false,
	},
};

export const Default = (args) => {
	return (
		<Badge {...args}>
			<Image
				src="https://picsum.photos/60"
				width={60}
				style={{ borderRadius: 8 }}
			/>
		</Badge>
	);
};

export const Dot = () => {
	return (
		<Badge dot>
			<Image src="https://picsum.photos/40" width={40} />
		</Badge>
	);
};
