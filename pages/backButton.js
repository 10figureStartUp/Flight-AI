import Link from "next/link";

export default function BackButton({ href }) {
  return (
    <Link href={href}>
      <a>Back</a>
    </Link>
  );
}
