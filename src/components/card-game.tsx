import { Game } from "../types/game"

type Props = {
    game: Game;
}

export default function CardGame({ game }: Props) {
    return (
        <div className=" rounded-lg min-w-36 space-y-2">
            {
                game.thumb
                    ? <img className="w-full h-30 rounded-lg object-cover animate-pulse" src={game.thumb.url} />
                    : <div className="rounded-lg min-w-36">
                        <div className="w-full h-[185px] rounded-lg bg-neutral-800" />
                    </div>
            }

            <div className="w-full h-20 rounded-lg ">
                <h3 className="text-bold text-lg">
                    {game.title}
                </h3>
                <span className="text-sm text-stone-500">
                    {game.providerName}
                </span>
            </div>
        </div>
    )
}