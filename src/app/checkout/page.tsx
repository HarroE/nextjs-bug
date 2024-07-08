import Link from "next/link";
import { TestButton } from "../components/TestButton";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page() {
  return (
    <div>
      <Link href={"/"}>Back to homepage</Link>
      <h1>Checkout page</h1>
      <TestButton />
    </div>
  );
}
