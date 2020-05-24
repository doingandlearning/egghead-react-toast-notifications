import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <div>About page</div>
      <div>
        <Link href="/">
          <a>Home page</a>
        </Link>
      </div>
    </div>
  );
}
