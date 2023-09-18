import { Route, Routes } from "react-router";
import { PostsPage, PostPage, NotFoundPage } from "@pages";
import DefaultTemplate from "./components/template/DefaultTemplate";

const App = () => {
	return (
		<DefaultTemplate>
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/posts" element={<PostsPage />} />
				<Route path="/posts/:postId" element={<PostPage />} />
				<Route path="*" element={<NotFoundPage />} />

			</Routes>
		</DefaultTemplate>
	);
};

export default App;
