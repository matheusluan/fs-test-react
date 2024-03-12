import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../stores/store";

import { api } from "../services/api";
import { decrement, incrementAsync } from "../stores/coin/coinSlice";

import { toast } from "sonner";
import { Header } from "../components/header";
import { Divider } from "../components/divider";
import { CardReel } from "../components/card-reel";
import { Columns2, Loader, Rows2 } from "lucide-react";
import { RewardRules } from "../components/reward-rules";

const reel1 = ["cherry", "lemon", "apple"];
const reel2 = ["lemon", "apple", "apple"];
const reel3 = ["cherry", "lemon", "banana"];

export function Play() {

    //Dispatch for redux
    const dispatch = useDispatch<AppDispatch>();

    //Get coins from global state
    const coinsNow = useSelector((state: RootState) => state.coin.value);

    //State for spinning animation
    const [isSpinning, setIsSpinning] = useState(false);

    //State for control of vertical or horizontal spining
    const [vertical, setVertical] = useState(true);

    //States for result of spin
    const [spinedReel1, setSpinedReel1] = useState<string[]>([]);
    const [spinedReel2, setSpinedReel2] = useState<string[]>([]);
    const [spinedReel3, setSpinedReel3] = useState<string[]>([]);

    //Function for spin reels
    async function spinReels() {

        if (isSpinning) {
            return;
        }

        //Verify the user coins
        if (coinsNow <= 0) {
            toast.error('You dont have any coin!')
            return;
        }

        setIsSpinning(true);

        try {

            // Call backend endpoint
            const response = await api.post('/play');

            // Destructure the response data
            const { coins, spinedReel1, spinedReel2, spinedReel3 } = response.data;

            // Set the state with the received data            
            setSpinedReel1(spinedReel1.slice(0, 3));
            setSpinedReel2(spinedReel2.slice(0, 3));
            setSpinedReel3(spinedReel3.slice(0, 3));

            //-1 coin for spin 
            dispatch(decrement());

            setTimeout(() => {
                //Att coins with backend result
                dispatch(incrementAsync(coins));

                // Toast
                if (coins > 0) {
                    toast.success(`You got ${coins} coins!!`);
                } else {
                    toast.warning(`You did not get any coins!!`);
                }

                setIsSpinning(false);
            }, 3000);

        } catch (error) {
            // Handle errors
            toast.error('Error occurred, please try again!');
        }
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

            <div className="w-full min-h-96 rounded-lg mx-auto md:max-w-7xl my-5 p-2 md:p-5 bg-neutral-800 flex flex-col items-center justify-center gap-5">
                
                <div className="w-full flex flex-col justify-center items-center gap-2">
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

                <RewardRules />
                
                <div className={`grid ${vertical ? 'grid-cols-3' : 'grid-rows-3'} gap-2 md:gap-5 `}>

                    <div className={`border border-neutral-700 rounded-lg grid ${!vertical ? 'grid-cols-3' : 'grid-rows-3'} gap-2 p-2 md:gap-5 md:p-5 items-center justify-center overflow-hidden`}>
                        {
                            (spinedReel1.length > 0 ? spinedReel1 : reel1).map((fruit, index) => (
                                <CardReel key={index} fruit={fruit} selected={index === 1 && !isSpinning} animation={isSpinning ? (vertical ? 'animate-infinite-scroll-y-fast' : 'animate-infinite-scroll-fast') : ''} />
                            ))
                        }
                    </div>

                    <div className={`border border-neutral-700 rounded-lg grid ${!vertical ? 'grid-cols-3' : 'grid-rows-3'} gap-2 p-2 md:gap-5 md:p-5 items-center justify-center overflow-hidden`}>

                        {
                            (spinedReel2.length > 0 ? spinedReel2 : reel2).map((fruit, index) => (
                                <CardReel key={index} fruit={fruit} selected={index === 1 && !isSpinning} animation={isSpinning ? (vertical ? 'animate-infinite-scroll-y-fast' : 'animate-infinite-scroll-fast') : ''} />
                            ))
                        }
                    </div>

                    <div className={`border border-neutral-700 rounded-lg grid ${!vertical ? 'grid-cols-3' : 'grid-rows-3'} gap-2 p-2 md:gap-5 md:p-5 items-center justify-center overflow-hidden`}>
                        {
                            (spinedReel3.length > 0 ? spinedReel3 : reel3).map((fruit, index) => (
                                <CardReel key={index} fruit={fruit} selected={index === 1 && !isSpinning} animation={isSpinning ? (vertical ? 'animate-infinite-scroll-y-fast' : 'animate-infinite-scroll-fast') : ''} />
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
