"use client";

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
import { Disclosure } from "@headlessui/react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";

export default function Appbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="flex justify-between items-center">
                <Link href={"/"}>
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
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                  <ul className="flex space-x-4">
                    <Link
                      href={"/"}
                      className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out text-xl">
                      Home
                    </Link>
                    <Link
                      href={"/works"}
                      className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out text-xl">
                      How it works
                    </Link>
                    <Link
                      href={"/features"}
                      className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out text-xl">
                      Features
                    </Link>
                  </ul>
                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="EN" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">EN</SelectItem>
                      <SelectItem value="tr">TR</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <div>
                    <Button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }>
                      {theme === "dark" ? (
                        <LuSun className="h-[1.2rem] w-[1.2rem]" />
                      ) : (
                        <IoMoonOutline className="h-[1.2rem] w-[1.2rem]" />
                      )}
                    </Button>
                  </div> */}
                </div>
                <div className="md:hidden flex items-center">
                  <Disclosure.Button className="text-gray-600 hover:text-blue-600">
                    {open ? (
                      <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <CiMenuBurger className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <ul className="space-y-4 mt-4">
                  <Link
                    href={"#"}
                    className="block text-gray-600 hover:text-blue-600 text-lg">
                    Home
                  </Link>
                  <Link
                    href={"#how-it-works"}
                    className="block text-gray-600 hover:text-blue-600 text-lg">
                    How it works
                  </Link>
                  <Link
                    href={"#features"}
                    className="block text-gray-600 hover:text-blue-600 text-lg">
                    Features
                  </Link>
                  <div className="mt-4">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="EN" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">EN</SelectItem>
                        <SelectItem value="tr">TR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
}
