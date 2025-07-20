"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";

import { socialLinks } from "@/components/ui//social-icons";

import SocialIcons from "../ui/social-icons";



const navLinks = [
    {
      label: "Nega lica i tela",
      href: "/nega-lica-i-tela",
    },
    {
      label: "Frizer",
      href: "/frizer",
    },
    {
      label: "Nega ruku i nogu",
      href: "/nega-ruku-i-nogu",
    },
    {
      label: "Depilacija / Epilacija",
      href: "/uklanjanje-dlaka",
    },
    {
      label: "Šminkanje",
      href: "/sminka",
    },
  ];

export default function MobileNav({scrolled}: { scrolled: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <Button
  variant="ghost"
  className={`rounded-xl w-10 h-10 hover:bg-transparent flex items-center justify-center cursor-pointer ${
    scrolled ? "hover:text-black" : "hover:text-white"
  }`}
>

          <Menu className="!w-6 !h-6 "  />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        className="bg-background w-full h-full [&>button:last-child]:hidden "
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>

        <div className="flex px-4 items-center justify-between pt-6 pb-4">
          <div className="flex items-center  w-full">
            <Image src={Logo} alt="angels kozmeticki salon" width={80} height={80} />
            <h2 className="font-semibold text-black ">KOZMETICKI SALON ANGELS</h2>
          </div>
          <SheetClose asChild>
            <button
              className="rounded-xl w-10 h-10 text-black cursor-pointer  transition-colors duration-300 flex items-center justify-center"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </SheetClose>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {navLinks.map(({ href, label }) => (
            <SheetClose asChild key={href}>
              <Link
                href={href}
                className={
                  "text-lg  font-medium px-2 py-1 rounded-md text-black transition-colors duration-300"
                }
              >
                {label}
              </Link>
            </SheetClose>
          ))}
        </div>
        <div className="px-4 py-6 ">
          <SocialIcons links={socialLinks} className="text-black" />
        </div>
      </SheetContent>
    </Sheet>
  );
}