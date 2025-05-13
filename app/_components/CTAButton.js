"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});

export default function CTAButton() {
  const [ballStyles, setBallStyles] = useState([]);

  useEffect(() => {
    // Generate random animation values for rotation and skew
    const generateRandomValues = () => {
      return Array.from({ length: 6 }).map(() => ({
        rotate: `${Math.random() * 360}deg`,
        skew: `${Math.random() * 40 - 20}deg`, // Random skew between -20 and 20
        delay: `${Math.random() * 0.5}s`, // Random delay for staggered start
      }));
    };

    setBallStyles(generateRandomValues());
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Ball 1 */}
      <div
        className="absolute w-[25px] h-[25px] bg-[#D9D9D9] rounded-[500px]"
        style={{
          animation: `rotateSkewAnimation 2.5s ease-in-out ${ballStyles[0]?.delay} forwards`,
          transform: `rotate(${ballStyles[0]?.rotate}) skew(${ballStyles[0]?.skew})`,
        }}
      ></div>

      {/* Ball 2 */}
      <div
        className="absolute w-[35] h-[35] bg-[#B3AEF5] rounded-[500px]"
        style={{
          animation: `rotateSkewAnimation 2.5s ease-in-out ${ballStyles[1]?.delay} forwards`,
          transform: `rotate(${ballStyles[1]?.rotate}) skew(${ballStyles[1]?.skew})`,
        }}
      ></div>
      {/* Ball 3 */}
      <div
        className="absolute w-[30px] h-[30px] bg-[#E5C8C8] rounded-[500px]"
        style={{
          animation: `rotateSkewAnimation 2.5s ease-in-out ${ballStyles[2]?.delay} forwards`,
          transform: `rotate(${ballStyles[2]?.rotate}) skew(${ballStyles[2]?.skew})`,
        }}
      ></div>

      {/* Ball 4 */}
      <div
        className="absolute w-[54] h-[33] bg-[#F7BCE9] rounded-[500px]"
        style={{
          animation: `rotateSkewAnimation 2.5s ease-in-out ${ballStyles[3]?.delay} forwards`,
          transform: `rotate(${ballStyles[3]?.rotate}) skew(${ballStyles[3]?.skew})`,
        }}
      ></div>
      {/* Ball 5 */}
      <div
        className="absolute w-[30px] h-[30px] bg-[#D7CBE7] rounded-[500px]"
        style={{
          animation: `rotateSkewAnimation 2.5s ease-in-out ${ballStyles[4]?.delay} forwards`,
          transform: `rotate(${ballStyles[4]?.rotate}) skew(${ballStyles[4]?.skew})`,
        }}
      ></div>

      {/* Ball 6 */}
      <div
        className="absolute w-[30] h-[30] bg-[#EAA879] rounded-[500px]"
        style={{
          animation: `rotateSkewAnimation 2.5s ease-in-out ${ballStyles[5]?.delay} forwards`,
          transform: `rotate(${ballStyles[5]?.rotate}) skew(${ballStyles[5]?.skew})`,
        }}
      ></div>
      <button
        className={`w-[166px] h-[45px] backdrop-blur-[10px] rounded-[30px] fill-[#000000] opacity-50 text-[#FFFFFF] ${inter.className}`}
      >
        Try Demo
      </button>

      <style jsx>{`
        @keyframes rotateSkewAnimation {
          0% {
            transform: rotate(0deg) skew(0deg);
          }
          50% {
            transform: rotate(180deg) skew(20deg);
          }
          100% {
            transform: rotate(360deg) skew(0deg);
          }
        }
      `}</style>
    </div>
  );
}
