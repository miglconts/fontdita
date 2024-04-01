"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Todos", href: "/store/all" },
  { label: "Electrónicos", href: "/store/Electronics" },
  { label: "Muebles", href: "/store/Furniture" },
  { label: "Zapatos", href: "/store/Shoes" },
  { label: "Misceláneo", href: "/store/Miscellaneous" },
];

const CategoriesMenu = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname === link.href ? "font-semibold border-b border-orange-600 " : ""
          } py-2`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
};

export default CategoriesMenu;
