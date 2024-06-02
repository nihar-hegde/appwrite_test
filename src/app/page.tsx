import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Hello world</h1>
      <Link href={"/admin/user/dashboard"}>Go to dashboard</Link>
    </main>
  );
}
