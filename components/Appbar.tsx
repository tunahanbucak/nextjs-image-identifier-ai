"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

export default function Appbar() {
  return (
    <header className="bg-white shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="flex justify-between items-center ">
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
                    <Link
                      href={"/contact"}
                      className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out text-xl">
                      Contact
                    </Link>
                  </ul>
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
                  <Disclosure.Button
                    as={Link}
                    href={"/"}
                    className="block text-gray-600 hover:text-blue-600 text-lg">
                    Home
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    href={"/works"}
                    className="block text-gray-600 hover:text-blue-600 text-lg">
                    How it works
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    href={"/features"}
                    className="block text-gray-600 hover:text-blue-600 text-lg">
                    Features
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    href={"/contact"}
                    className="block text-gray-600 hover:text-blue-600 text-lg">
                    Contact
                  </Disclosure.Button>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
}
