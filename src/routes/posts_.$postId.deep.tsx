import { postQueryOptions } from "@/queries/postQueryOptions";
import { FileRoute, Link } from "@tanstack/react-router";

import { PostErrorComponent } from "./posts.$postId";

export const Route = new FileRoute("/posts_/$postId/deep").createRoute({
  loader: ({ context: { queryClient }, params: { postId } }) => {
    return queryClient.ensureQueryData(postQueryOptions(postId));
  },
  errorComponent: PostErrorComponent,
  component: PostDeepComponent,
});

function PostDeepComponent() {
  const post = Route.useLoaderData();

  return (
    <div className="space-y-2 p-2">
      <Link
        to="/posts"
        className="block py-1 text-blue-800 hover:text-blue-600"
      >
        ← All Posts
      </Link>
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
    </div>
  );
}
