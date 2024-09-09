import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
];

export default function Appbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/image-logo.jpg"
              alt="logo"
              width={50}
              height={50}
              className="mr-3"
            />
            <h1 className="text-2xl font-bold text-blue-600">
              Image Identifier
            </h1>
          </div>
          <div>
            <ul className="flex space-x-4">
              <Link
                href={"#"}
                className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out text-xl"
              >
                Home
              </Link>
              <Link
                href={"#how-it-works"}
                className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out text-xl"
              >
                How it works
              </Link>
              <Link
                href={"#features"}
                className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out text-xl"
              >
                Features
              </Link>
            </ul>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="EN" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="tr">TR</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}
