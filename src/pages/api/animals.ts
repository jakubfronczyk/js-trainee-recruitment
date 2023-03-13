import { NextApiRequest, NextApiResponse } from "next";
import { AnimalModel } from "../../types/types";
import PolarBear from "../../../public/polarbear.png";
import Cheetah from "../../../public/cheetah.png";
import Panda from "../../../public/panda.png";
import Fox from "../../../public/fox.png";
import Squirrel from "../../../public/squirrel.png";
import Butterfly from "../../../public/butterfly.png";
import Elephant from "../../../public/elephant.png";

const animals: AnimalModel[] = [
    {
        id: "polarbear",
        name: "Polar Bear",
        title: "Say hello to your new friend",
        avatar: PolarBear.src,
    },
    {
        id: "cheetah",
        name: "Cheetah",
        title: "No petting before eating",
        avatar: Cheetah.src,
    },
    {
        id: "panda",
        name: "Panda",
        title: "Eating always with pleasure",
        avatar: Panda.src,
    },
    {
        id: "fox",
        name: "Fox",
        title: "Sometimes quite suspicious",
        avatar: Fox.src,
    },
    {
        id: "squirrel",
        name: "Squirrel",
        title: "Staying curious",
        avatar: Squirrel.src,
    },
    {
        id: "butterfly",
        name: "Butterfly",
        title: "Majestic every time of a day",
        avatar: Butterfly.src,
    },
    {
        id: "elephant",
        name: "Elephant",
        title: "It makes a huge difference",
        avatar: Elephant.src,
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
): void {
    res.status(200).json(animals);
}
