'use client';

import Link from "next/link";

const links = [
  { href: "/tretmani-lica", label: "Tretmani Lica" },
  { href: "/frizer", label: "Frizer" },
  { href: "/masaze", label: "Masaze" },
  { href: "/tretmani-tela", label: "Tretmani Tela" },
  { href: "/manikir-pedikir", label: "Manikir Pedikir" },
  { href: "/epilacija-depilacija", label: "Epilacija Depilacija" },
  { href: "/sminkanje", label: "Sminkanje" },
  { href: "/trajna-sminka", label: "Trajna sminka" },
  { href: "/tretmani-lica", label: "Tretmani Lica" },
  { href: "/frizer", label: "Frizer" },
  { href: "/masaze", label: "Masaze" },
  { href: "/tretmani-tela", label: "Tretmani Tela" },
  { href: "/manikir-pedikir", label: "Manikir Pedikir" },
  { href: "/epilacija-depilacija", label: "Epilacija Depilacija" },
  { href: "/sminkanje", label: "Sminkanje" },
  { href: "/trajna-sminka", label: "Trajna sminka" },
];

export default function ScrollingText() {
  return (
    <div className="bg-transparent text-black py-4 lg:py-6 overflow-hidden whitespace-nowrap group">
      <ul className="animate-scroll inline-block min-w-full">
        {[...links, ...links].map((link, index) => (
          <li
            key={index}
            className="mx-6 text-lg lg:text-xl font-medium inline-block hover:underline pointer-events-auto"
          >
            <Link  href={link.href}>
            {link.label}
            </Link>
            
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .group:hover .animate-scroll {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
