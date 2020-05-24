import Link from "next/link";
import { useToasts } from "react-toast-notifications";
export default function IndexPage() {
  const { addToast } = useToasts();
  return (
    <div>
      <div>Hello World!</div>
      <div>
        <a>
          <Link href="/about">About page</Link>
        </a>
      </div>
      <div>
        <button onClick={() => addToast("Success!", { appearance: "success" })}>
          Success!
        </button>
        <button onClick={() => addToast("Warn!", { appearance: "warning" })}>
          Warn
        </button>
        <button onClick={() => addToast("Info!", { appearance: "info" })}>
          Info
        </button>
        <button onClick={() => addToast("Error!", { appearance: "error" })}>
          Error!
        </button>
      </div>
    </div>
  );
}
