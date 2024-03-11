import { Button } from "./button";
import backgroundImage from '../assets/background.png';

export function Banner() {
    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="relative w-full h-96 bg-no-repeat rounded-lg bg-cover"
        >
            <div className='absolute top-40 left-8'>
                <h1 className='text-4xl font-bold'>You already have 20 coins</h1>
                <span className='font-extralight text-gray-50'>Start now and receive 20 coins for slot machine.</span>
            </div>
            <Button title="Play now" additionalClass="absolute bottom-8 left-8" />
        </div>
    )
}