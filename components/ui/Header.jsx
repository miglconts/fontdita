"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartWidget from "./CartWidget";

const links = [
  {
    label: "Tienda",
    href: "/store/all",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  {
    label: "About",
    href: "/about",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className=" border-b border-orange-600 bg-card text-card-foreground shadow-sm">
      <div className="container m-auto py-6 flex justify-between items-center">
        <Link href={"/"}>
          <span className="font-bold font-mono text-xl text-orange-600">
            Font-dita
          </span>
        </Link>

        <nav className="flex justify-between gap-2">
          {links.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "font-semibold border-b border-orange-600 p-3"
                    : ""
                } p-3`}
              >
                {link.label}
              </Link>
            );
          })}
          <CartWidget />
        </nav>
      </div>
    </header>
  );
};

export default Header;
