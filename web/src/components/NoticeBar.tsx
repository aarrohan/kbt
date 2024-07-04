"use client";
import { useState } from "react";

export default function NoticeBar() {
  const [isActive, setIsActive] = useState<boolean>(true);

  if (!isActive) return;

  return (
    <div className="relative bg-white">
      <div className="mx-auto h-[30px] px-8 flex justify-center items-center">
        <p className="text-xs font-medium uppercase text-center text-dark">
          Free returns & 60 day return window
        </p>
      </div>

      <button
        onClick={() => setIsActive(false)}
        className="absolute top-1/2 right-1.5 -translate-y-1/2"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L4 12M4 4L12 12"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-dark"
          />
        </svg>
      </button>
    </div>
  );
}
