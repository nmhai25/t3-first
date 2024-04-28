import Header from "~/components/Header";
import { SignInSheet } from "~/components/sheets/signInSheet";
import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  const users = await db.query.users.findMany();
  return (
    <div>
      {/* {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))} */}
      <Header />
    </div>
  );
}
