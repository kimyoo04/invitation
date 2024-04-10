import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute("/posts/").createRoute({
  component: PostsIndexComponent,
});

function PostsIndexComponent() {
  return <div>Select a post.</div>;
}
