import { useState } from "react";
import Progress from "../components/Progress";

export default {
	title: "Component/Progress",
	component: Progress,
	// argTypes: {
	// 	value: { control: "number" },
	// },
	// args: {
	// 	value: 50,
	// },
};

export const Default = () => {
    const [value, setValue] = useState(20);

	return (
		<div>
            <button onClick={() => setValue(100)}>change value</button>
			<Progress value={value}/>
		</div>
	);
};
