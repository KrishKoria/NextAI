import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { SignedIn, UserButton } from "@clerk/nextjs";
export default function Navbar() {
  return (
    <div className="">
      <header className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image src={logo} alt="logo" width={"32"} height={"32"} />
          <span>NextAI</span>
        </Link>
        <div className="">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
    </div>
  );
}
