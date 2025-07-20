import Link from "next/link";

const navLinks = [
   
    {
      label: "Frizer",
      href: "/frizer",
    },
    {
      label: "Šminkanje",
      href: "/sminka",
    },
    {
      label: "Nega lica i tela",
      href: "/nega-lica-i-tela",
    },
    {
      label: "Epilacija",
      href: "/uklanjanje-dlaka",
    },
   
   
  ];


export default function DesktopNav() {
 

  return (
    <nav className="flex gap-12 items-center">
      {navLinks.map(({ href, label }) => {
      return (
          <li
            key={href}
            className={`font-medium text-[14px] leading-[19px] text-center tracking-[0.1em] uppercase  
              `}
          >
            {/* Link to section anchor */}
            <Link href={href}>{label}</Link>
          </li>
        );
      })}
    </nav>
  );
}