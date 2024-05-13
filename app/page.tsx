import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {

  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/user">Go to users</Link> <br />
      <Link href="/product">Go to products</Link>
    </main>
  );
}


