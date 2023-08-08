import Divider from "../components/Divider";
import Text from '../components/Text'

export default {
	title: "Component/Divider",
	component: Divider,
};

export const horizontal = () => {
	return <>
        <Text>위</Text>
        <Divider type="horizontal"/>
        <Text>아래</Text>
    </>;
};

export const vertical = () => {
	return <>
        <Text>왼쪽</Text>
        <Divider type="vertical"/>
        <Text>오른쪽</Text>
    </>;
};
