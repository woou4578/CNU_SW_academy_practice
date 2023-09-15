import PostItem from "../PostItem";
import { usePostContext } from "../../../contexts/PostProvider";

const PostList = () => {
	const { posts } = usePostContext();

	return (
		<ul>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</ul>
	);
};

export default PostList;
