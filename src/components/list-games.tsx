
import { Game } from "../types/game"
import CardGame from "./card-game";

type Props = {
    games: Game[];
}

export function ListGames({ games }: Props) {

    return (
        <>
            {
                games.length > 0
                    ? <div className="my-5 w-full grid grid-cols-1 p-5 md:p-0 md:grid-cols-4 lg:grid-cols-5 rounded-xl gap-5">
                        {games.map((game) => (
                            <CardGame key={game.id} game={game} />
                        ))}
                    </div >
                    : <h1 className="flex justify-center items-center m-5">No result, please type another title.</h1>
            }
        </>
    )
}