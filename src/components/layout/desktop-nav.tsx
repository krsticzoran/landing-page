import Link from "next/link";

const navLinks = [
   
    {
      label: "Frizer",
      href: "/",
    },
    {
      label: "Šminkanje",
      href: "/",
    },
    {
      label: "Nega lica i tela",
      href: "/",
    },
    {
      label: "Epilacija",
      href: "/",
    },
   
   
  ];


export default function DesktopNav() {
 

  return (
    <nav className="flex gap-12 items-center">
      {navLinks.map(({ href, label }) => {
      return (
          <li
          key={label}
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