import { usePostContext } from "../../../contexts/PostProvider";
import useForm from "../../../hooks/useForm";
import Spinner from "../../Spinner";

const PostAddForm = () => {
    const { onAddPost } = usePostContext();

	const { isLoading, errors, handleChange, handleSubmit } = useForm({
		initialValues: {
			userId: 1,
			title: "",
			body: "",
		},
		onSubmit: async (values) => {
            await onAddPost(values);
        },
		validate: ({ title, body }) => {
			const errors = {};
			if (!title) errors.title = "Title is required";
			if (!body) errors.body = "Body is required";
			return errors;
		},
	});

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input type="text" name="title" onChange={handleChange} />
                {errors.title}
			</div>
			<div>
				<input type="text" name="body" onChange={handleChange} />
                {errors.body}
			</div>
			{isLoading ? <Spinner /> : <button type="submit">Add</button>}
		</form>
	);
};

export default PostAddForm;
