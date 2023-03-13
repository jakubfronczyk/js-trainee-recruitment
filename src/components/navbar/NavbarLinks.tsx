import Link from "next/link";
import styles from "./NavbarLinks.module.css";

type NavbarLinks = {
    title: string;
    href: string;
    active: boolean;
};

const NavbarLinks = ({ title, href, active }: NavbarLinks) => {
    return (
        <Link
            href={href}
            className={`${styles.navlinks} ${active ? styles.active : ""}`}
        >
            {title}
        </Link>
    );
};

export default NavbarLinks;
