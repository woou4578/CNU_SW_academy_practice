import { useParams } from "react-router";
import { useAsync } from "@hooks";
import axios from "axios";
import { Fragment } from "react";
import { Spinner, Header, Text } from "@components";
const PostPage = () => {
	const { postId } = useParams();

	const post = useAsync(async () => {
		return await axios
			.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((response) => response.data);
	}, [postId]);
	return <div>
        {post.isLoading ? <Spinner />: 
            <Fragment>
                <Header strong>{post.value?.title}</Header>
                <Text>{post.value?.body}</Text>
            </Fragment>}
        </div>;
};

export default PostPage;
