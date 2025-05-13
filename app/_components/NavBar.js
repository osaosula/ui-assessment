import Link from "next/link";
import Logo from "./Logo";
import SignInButton from "./SignInButton";

export default function Navigation() {
  return (
    <nav className=" w-full h-[71px] flex items-center justify-between px-6 text-[15px] text-black">
      <div>
        <Logo />
      </div>
      <ul className="flex gap-6 font-normal">
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
