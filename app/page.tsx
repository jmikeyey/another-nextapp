import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/user">Go to users</Link> <br />
      <Link href="/product">Go to products</Link>
    </main>
  );
}

