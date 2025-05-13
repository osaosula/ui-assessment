import { Inter } from "next/font/google";
import Logo from "./Logo";
import SignInButton from "./SignInButton";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400"],
  subsets: ["latin"],
});

export default function Navigation() {
  return (
    <nav
      className={`w-full h-[71px] flex  justify-between text-[15px] ${inter.className}`}
    >
      <div>
        <Logo />
      </div>
      <ul>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
