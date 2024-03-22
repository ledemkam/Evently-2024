"use client";
import { headerLinks } from "@/contants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-coral-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.label}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavItems;
