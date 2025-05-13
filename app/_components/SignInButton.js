"use client";
import { useEffect, useState } from "react";

export default function SignInButton() {
  const [ballStyles, setBallStyles] = useState([]);

  useEffect(() => {
    // Generate random animation values for rotation and skew
    const generateRandomValues = () => {
      return Array.from({ length: 2 }).map(() => ({
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
        className="absolute w-[30px] h-[30px] bg-[#E5C8C8] rounded-[500px]"
        style={{
          animation: `rotateSkewAnimation 2.5s ease-in-out ${ballStyles[0]?.delay} infinite`,
          transform: `rotate(${ballStyles[0]?.rotate}) skew(${ballStyles[0]?.skew})`,
        }}
      ></div>

      {/* Ball 2 */}
      <div
        className="absolute w-[54] h-[33] bg-[#F7BCE9] rounded-[500px]"
        style={{
          animation: `rotateSkewAnimation 2.5s ease-in-out ${ballStyles[1]?.delay} infinite`,
          transform: `rotate(${ballStyles[1]?.rotate}) skew(${ballStyles[1]?.skew})`,
        }}
      ></div>

      {/* Sign In Button */}
      <button className="w-[99px] h-[45px] backdrop-blur-[10px] rounded-[30px] fill-[#FFFFFF] opacity-50 ">
        Sign In
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
