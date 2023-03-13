import { useEffect, useState, useRef, MutableRefObject } from "react";
import styles from "./Navbar.module.css";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const observerRef: MutableRefObject<IntersectionObserver | null> =
        useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => {
            (observerRef.current as IntersectionObserver).observe(section);
        });

        return () => {
            sections.forEach((section) => {
                (observerRef.current as IntersectionObserver).unobserve(
                    section
                );
            });
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <h3 className={styles.title}>Your new gang</h3>
            <NavbarLinks
                title="Polar Bear"
                href="#polarbear"
                active={activeSection === "polarbear"}
            />
            <NavbarLinks
                title="Cheetah"
                href="#cheetah"
                active={activeSection === "cheetah"}
            />
            <NavbarLinks
                title="Panda"
                href="#panda"
                active={activeSection === "panda"}
            />
            <NavbarLinks
                title="Fox"
                href="#fox"
                active={activeSection === "fox"}
            />
            <NavbarLinks
                title="Squirrel"
                href="#squirrel"
                active={activeSection === "squirrel"}
            />
            <NavbarLinks
                title="Butterfly"
                href="#butterfly"
                active={activeSection === "butterfly"}
            />
            <NavbarLinks
                title="Elephant"
                href="#elephant"
                active={activeSection === "elephant"}
            />
        </nav>
    );
};

export default Navbar;
