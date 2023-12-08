import Link from "next/link";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "início" },
  { path: "/projects", name: "meus projetos" },
  { path: "/contact", name: "contato" },
];

const Nav = ({ containerStyles, linkStyles, underLineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
