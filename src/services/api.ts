import { client } from "./client";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  const data = await client.get(`${API_URL}/posts`);
  return data;
};

export const getPost = async ({ postId }: { postId: string }) => {
  const data = await client.get(`${API_URL}/posts/${postId}`);
  return data;
};
