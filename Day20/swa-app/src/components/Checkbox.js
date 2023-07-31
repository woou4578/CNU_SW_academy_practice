import React from "react";

const Checkbox = React.memo(({ label = "Label", checked = false, onChange }) => {
	return (
		<label>
			{label}
			<input
				type="checkbox"
				defaultChecked={checked}
				onChange={onChange}
			/>
		</label>
	);
});

export default Checkbox;
