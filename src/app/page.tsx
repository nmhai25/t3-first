import Header from "~/components/Header";
import { db } from "~/server/db";

export default async function HomePage() {
  return (
    <div className="pl-6 pr-6">
      {/* {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))} */}
    </div>
  );
}
