import { useState } from "react";

import { Header } from "../components/header";
import { Divider } from "../components/divider";
import { CardReel } from "../components/card-reel";
import { Columns2, Loader, Rows2 } from "lucide-react";

const reel1 = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"];
const reel2 = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"];
const reel3 = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"];

export function Play() {

    //State for spinning animation
    const [isSpinning, setIsSpinning] = useState(false);

    //State for control of vertical or horizontal spining
    const [vertical, setVertical] = useState(true);

    //States for result of spin
    const [spinedReel1, setSpinedReel1] = useState<string[]>([]);
    const [spinedReel2, setSpinedReel2] = useState<string[]>([]);
    const [spinedReel3, setSpinedReel3] = useState<string[]>([]);

    //Function for spin reels
    function spinReels() {

        if (isSpinning) {
            return
        }

        setIsSpinning(true);

        // Timeout for animation reels
        setTimeout(() => {

            // shuffle reels
            setSpinedReel1(shuffleArray([...reel1]));
            setSpinedReel2(shuffleArray([...reel2]));
            setSpinedReel3(shuffleArray([...reel3]));

            setIsSpinning(false);
        }, 3000);

    }

    function shuffleArray<T>(array: T[]): T[] {

        // Copy the first array -> for immutability 
        const newArray = [...array];

        // Sort the new array with ramdom function
        newArray.sort(() => Math.random() - 0.5);

        return newArray;
    }

    function handleVertical(opt: boolean) {

        if (isSpinning) {
            return
        }

        setVertical(opt);
    }

    return (
        <main className='w-full'>
            <Header />

            <Divider />

            <div className="w-full min-h-96 rounded-lg mx-auto md:max-w-7xl my-5 p-5 bg-neutral-800 flex flex-col items-center justify-center gap-5">

                <div className="w-full flex justify-between items-center">
                    <h1>
                        Slot Machine
                    </h1>
                    <div className="flex gap-2">
                        <Columns2
                            size={15}
                            color="#fff"
                            onClick={() => handleVertical(true)}
                            className={`size-8 cursor-pointer ${vertical ? 'bg-lime-400' : 'bg-neutral-500'}  rounded-lg p-2`}
                        />
                        <Rows2
                            size={15}
                            color="#fff"
                            onClick={() => handleVertical(false)}
                            className={`size-8 cursor-pointer ${vertical ? 'bg-neutral-500' : 'bg-lime-400'}  rounded-lg p-2`}
                        />

                    </div>
                </div>

                <div className={`grid ${vertical ? 'grid-cols-3' : 'grid-rows-3'} gap-5 `}>

                    <div className={`border border-neutral-700 rounded-lg grid ${!vertical ? 'grid-cols-8' : 'grid-rows-8'} gap-5 p-5 items-center justify-center overflow-hidden`}>
                        {
                            (spinedReel1.length > 0 ? spinedReel1 : reel1).map((fruit, index) => (
                                <CardReel key={index} fruit={fruit} animation={isSpinning ? (vertical ? 'animate-infinite-scroll-y-fast' : 'animate-infinite-scroll-fast') : 'animate-pulse'} />
                            ))
                        }
                    </div>

                    <div className={`border border-neutral-700 rounded-lg grid ${!vertical ? 'grid-cols-8' : 'grid-rows-8'} gap-5 p-5 items-center justify-center overflow-hidden`}>

                        {
                            (spinedReel2.length > 0 ? spinedReel2 : reel2).map((fruit, index) => (
                                <CardReel key={index} fruit={fruit} animation={isSpinning ? (vertical ? 'animate-infinite-scroll-y-slow' : 'animate-infinite-scroll-slow') : 'animate-pulse'} />
                            ))
                        }
                    </div>
                    <div className={`border border-neutral-700 rounded-lg grid ${!vertical ? 'grid-cols-8' : 'grid-rows-8'} gap-5 p-5 items-center justify-center overflow-hidden`}>
                        {
                            (spinedReel3.length > 0 ? spinedReel3 : reel3).map((fruit, index) => (
                                <CardReel key={index} fruit={fruit} animation={isSpinning ? (vertical ? 'animate-infinite-scroll-y-faster' : 'animate-infinite-scroll-faster') : 'animate-pulse'} />
                            ))
                        }
                    </div>
                </div>
                <button
                    onClick={spinReels}
                    className="h-10 w-80 rounded-lg bg-red-500 flex items-center justify-center"
                >
                    {
                        isSpinning
                            ? <Loader size={20} color="#FFF" className="animate-spin" />
                            : 'Play'
                    }
                </button>
            </div>


        </main>
    )
}