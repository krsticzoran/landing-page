import Link from "next/link";

import {
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandYoutube,
  } from "@tabler/icons-react";
  import type { Icon } from "@tabler/icons-react";
  
  export type SocialLink = {
    href: string;
    label: string;
    icon: Icon;
    isEmail?: boolean; // Optional property to indicate if the link is an email
  };
  
  export const socialLinks: SocialLink[] = [
    {
        href: "https://www.facebook.com/",
        label: "Facebook",
        icon: IconBrandFacebook,
      },
      {
        href: "https://www.instagram.com/",
        label: "Instagram",
        icon: IconBrandInstagram,
      },
      {
        href: "https://www.youtube.com/",
        label: "YouTube",
        icon: IconBrandYoutube,
      },
  ];

interface SocialIconsProps {
  links?: SocialLink[];
  limit?: number;
  className?: string;
  size?: number;
}

export default function SocialIcons({
  links = socialLinks,
  limit,
  className,
  size = 24,
}: SocialIconsProps) {
  const displayedLinks = limit ? links.slice(0, limit) : links;
  return (
    <div className={`flex items-center gap-4 ${className || ""}`}>
      {displayedLinks.map(({ href, label, icon: Icon, isEmail }) => {
        // If isEmail is true, use mailto: prefix
        const linkHref = isEmail ? `mailto:${href}` : href;

        return (
          <li
            key={href}
          
            className="rounded-xl w-5 h-5  duration-300 flex items-center justify-center"
          >
            <Link   href={linkHref}
            // Only add target and rel attributes if it's not an email link
            {...(!isEmail && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            aria-label={label}>
            <Icon size={size} />
          </Link>
          </li>
        );
      })}
    </div>
  );
}