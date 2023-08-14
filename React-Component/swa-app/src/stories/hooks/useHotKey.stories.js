import useHotKey from "../../hooks/useHotKey";

export default {
	title: "Hook/useHotKey",
};

export const Default = () => {
	const hotkeys = [
		{
			global: true,
			combo: "ctrl+shift+k",
			onkeydown: (e) => {
				alert("meta+shift+k");
			},
		},
		{
			global: true,
			combo: "esc",
			onkeydown: (e) => {
				alert("esc");
			},
		},
	];

	useHotKey(hotkeys);

	return <div>useHotKey 테스트</div>;
};
