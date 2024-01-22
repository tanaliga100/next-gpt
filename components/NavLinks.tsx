import { ILinks, links } from "@/constants";
import Link from "next/link";

export default function NavLinks() {
  return (
    <ul>
      {links.map((item: ILinks) => {
        return (
          <li key={item.id} className="menu text-base-content">
            <Link href={item.href} className="capitalize">
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
