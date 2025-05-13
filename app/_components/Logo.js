import Image from "next/image";
import logo from "../../public/logo.png";
export default function Logo() {
  return (
    <>
      <Image src={logo} width="43" height="40" quality={100} alt="Logo" />
    </>
  );
}
