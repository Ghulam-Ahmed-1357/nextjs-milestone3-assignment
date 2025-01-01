import Link from "next/link";

export default function Navbar() {
  return (
    <div className="z-50 absolute inset-0 w-full h-20 flex justify-around md:justify-start items-center md:pl-20 md:gap-20 bg-black text-white">
      <Link href="/">Home</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
