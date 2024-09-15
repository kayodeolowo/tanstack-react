// components/PostList.js
import { usePosts } from "./hooks/usePosts";
const PostsList = () => {
  const { data, isLoading, isError } = usePosts();

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  if (isError) {
    return <p className="text-center ">Error loading posts!</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow-sm hover:shadow-lg">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
