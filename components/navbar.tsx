import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
export default function Navbar() {
  return (
    <div className="">
      <header>
        <Link href="/">
          <Image src={logo} alt="logo" />
          <span>NextAI</span>
        </Link>
      </header>
    </div>
  );
}
