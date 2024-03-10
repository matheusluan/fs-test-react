import { Button } from "./button";

export function Banner() {
    return (
        <div className="relative w-full h-96 bg-no-repeat rounded-lg bg-cover bg-cassino-background">
            <div className='absolute top-40 left-8'>
                <h1 className='text-4xl font-bold'>You already have 20 coins</h1>
                <span className='font-extralight text-gray-50'>Start now and receive 20 coins for slot machine.</span>
            </div>
            <Button title="Play now" additionalClass="absolute bottom-8 left-8" />
        </div>
    )
}