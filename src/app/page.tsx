import { db } from "@vercel/postgres";

export default async function HomePage() {
  const data = db;
  console.log("data", data);
  return (
    <div>
      <p>hehe</p>
    </div>
  );
}
