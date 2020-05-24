import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <div>Hello World!</div>
      <div>
        <a>
          <Link href="/about">About page</Link>
        </a>
      </div>
    </div>
  );
}
