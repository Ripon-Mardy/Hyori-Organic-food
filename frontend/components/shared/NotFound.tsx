"use client";

import Link from "next/link";
import { SearchX } from "lucide-react";

interface NotFoundProps {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function NotFound({
  title = "No Data Found",
  message = "Sorry, we could not find anything.",
  buttonText = "Go Back Home",
  buttonLink = "/",
}: NotFoundProps) {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center bg-white p-10 text-center">
      {/* icon */}
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <SearchX size={40} className="text-gray-500" />
      </div>

      {/* title */}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

      {/* message */}
      <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">{message}</p>

      {/* button */}
      <Link
        href={buttonLink}
        className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
      >
        {buttonText}
      </Link>
    </div>
  );
}
