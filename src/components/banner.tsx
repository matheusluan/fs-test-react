

export function Banner() {
    return (
        <div className="relative w-full h-96 bg-no-repeat rounded-lg bg-cover bg-cassino-background">
            <div className='absolute top-40 left-8'>
                <h1 className='text-4xl font-bold'>You already have 20 coins</h1>
                <span className='font-extralight text-neutral-50'>Start now and receive 20 coins to play into our games.</span>
            </div>
            <button className='w-24 h-10 rounded-xl bg-red-600 absolute bottom-8 left-8'>
                Play now
            </button>
        </div>
    )
}