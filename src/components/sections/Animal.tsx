import Image from "next/image";
import styles from "./Animal.module.css";
import { useRef } from "react";

type AnimalProps = {
    id: string;
    name: string;
    title: string;
    avatar: string;
};

const Animal = ({ id, name, title, avatar }: AnimalProps) => {
    const sectionRef = useRef(null);
    return (
        <section
            id={id}
            className={styles.content}
            ref={sectionRef}
        >
            <div className={styles.wrapper}>
                <p>{name}</p>
                <h2>{title}</h2>
                <Image
                    src={avatar}
                    alt="avatar-photo"
                    width={817}
                    height={431}
                />
            </div>
        </section>
    );
};

export default Animal;
