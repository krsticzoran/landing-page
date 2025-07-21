import Link from "next/link";

interface FooterLinksProps {
  title: string;
  data: [string, string][];
  addMargin?: boolean;
}

export default function FooterLinks({ title, data, addMargin }: FooterLinksProps) {
    return (
      <div className={addMargin ? "mr-20" : ""}>
        <h5 className="font-bold uppercase text-black/80">{title}</h5>
        <ul>
          {data.map((el, i) => (
            <li
              key={i}
              className="mt-4 font-medium capitalize transition-colors duration-1000 hover:text-secondary text-black/60"
            >
              <Link href={el[1]}>{el[0]}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }