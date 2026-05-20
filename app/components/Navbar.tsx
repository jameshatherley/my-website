import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 20, padding: 20 }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/cv">CV</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

