import Navbar from "@/components/navbar/Navbar";
import Animal from "@/components/sections/Animal";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { AnimalModel } from "@/types/types";

export default function Home() {
    const [animals, setAnimals] = useState<AnimalModel[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/animals");
            const data = await res.json();
            setAnimals(data);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.wrapper}>
            <Navbar key={Math.random()} />
            <div className={styles.content}>
                {animals.map((animal) => (
                    <Animal
                        key={animal.id}
                        id={animal.id}
                        name={animal.name}
                        title={animal.title}
                        avatar={animal.avatar}
                    />
                ))}
            </div>
        </div>
    );
}
