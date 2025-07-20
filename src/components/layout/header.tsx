"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";
import { useScrolled } from "@/hooks/use-scrolled";

import Container from "./container";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import SocialIcons from "../ui/social-icons";

import { motion } from "framer-motion";

export function Header() {
  // Use custom hook to track if the page has been scrolled more than 10 pixels vertically
  const scrolled = useScrolled(100);

  return (
    <motion.div
    initial={{ opacity: 0,}}       
    whileInView={{ opacity: 1 }}       
    viewport={{ once: true, amount: 0.3 }}   
    transition={{ duration: 1.2, ease: "easeOut" }}
    
    id="header"
    className={`fixed py-1 top-0  z-50 w-full flex items-center justify-center transition-[padding,background,box-shadow,position, color] ease-in-out duration-500 lg:duration-1000 ${
      scrolled
        ? " bg-white text-black shadow-lg"
        : "  bg-transparent text-white"
    }`}
  >
    <Container className="flex  justify-between w-full items-center font-jost
    ">
      {/* Logo wrapped in a Link to scroll to #hero */}
      <div className="flex items-center">
        <Link
          href={"#hero"}
          className="flex items-center cursor-pointer"
          aria-label="Scroll to hero section"
        >
          <Image src={Logo} alt="KOZMETICKI SALON ANGELS" width={80} height={80} priority className="w-16 h-16 lg:h-20 lg:w-20" />
        </Link>
      </div>

      {/* Desktop navigation - visible only on large screens (lg and above) */}
      <div className="hidden lg:block">
        <DesktopNav />
      </div>

      {/* Section containing social icons and mobile navigation menu */}
      <div className="flex items-center gap-4">
        {/* Social icons, visible on small screens and larger */}
        <div className="hidden lg:block">
          <SocialIcons limit={2} />
        </div>

        {/* Mobile navigation menu, visible only on smaller screens */}
        <div className="lg:hidden">
          <MobileNav scrolled={scrolled} />
        </div>
      </div>
      </Container>
    </motion.div>
  );
}