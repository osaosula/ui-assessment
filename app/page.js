"use client";
import CTAButton from "./_components/CTAButton";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <div className="bg-[#000000] rounded-[30px] w-[95vw] h-[85vh] mx-auto custom-shadow">
      <style jsx>{`
        .custom-shadow {
          box-shadow: -10px -10px 15px 5px rgba(179, 174, 245, 1);
        }
      `}</style>
      <h1
        className="text-[45px]"
        style={{
          background:
            "linear-gradient(to right, #B3AEF5, #D8CCE8, #E6C8C8, #EBA97A)",
        }}
      >
        Welcome to Axben
      </h1>

      <h2 className="text-[15px] text-[#FFFFFF]">
        Go Beyond Limits with Advanced Yet Simplified Trading
      </h2>
      <CTAButton />
      <p className="text-[13px] text-[#000000]">Forever free</p>
    </div>
  );
}
