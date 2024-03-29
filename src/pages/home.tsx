
import { ChangeEvent, useEffect, useState } from 'react'

import { Banner } from '../components/banner';
import { Header } from '../components/header';
import { Divider } from '../components/divider'
import { ListGames } from '../components/list-games';

import { toast } from 'sonner';

import { Game } from '../types/game';
import { Skeleton } from '../components/skeleton';

export function Home() {

    //States
    const [search, setSearch] = useState('');
    const [games, setGames] = useState<Game[]>([]);
    const [searchGames, setSearchGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(Boolean);

    //Functions

    //Get all games
    async function fetchGames() {
        try {

            setLoading(true);
            const response = await fetch(`${process.env.BASE_URL}/games`);

            if (!response.ok) {
                toast.error('Failed to fetch games.');
            }

            const games: Game[] = await response.json();

            if (games) {
                setGames(games);
            }

        } catch (error: any) {
            console.error('Error fetching games:', error.message);
            return [];
        } finally {
            setLoading(false);
        }
    }

    //Search games
    async function fetchSearchGames() {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.BASE_URL}/games/${search}`);

            if (!response.ok) {
                toast.success('Failed to fetch games.');
            }

            const games: Game[] = await response.json();

            if (games) {
                setSearchGames(games);
            }

        } catch (error: any) {
            console.error('Error fetching games:', error.message);
            return [];
        } finally {
            setLoading(false);
        }
    }

    //Handle the typing
    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value;

        setSearch(query.toLocaleLowerCase())
    }

    //Use effects
    useEffect(() => {
        fetchGames()
    }, [])

    useEffect(() => {
        if (!search) {
            return
        }

        fetchSearchGames();

    }, [search])

    return (
        <main className='w-full flex flex-col items-center justify-between'>

            <Header />

            <Divider />

            <section className='w-full md:w-full md:max-w-5xl my-5 px-5'>

                <Banner />

                <input
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search a game by title"
                    className="h-30 mt-5 text-stone-600 rounded-lg bg-neutral-800 px-4 py-2 w-full outline-none focus:outline-none focus:ring"
                />

                {
                    loading
                        ?
                        <div className="my-5 w-full md:max-h-[500px] grid grid-cols-2 md:grid-cols-4 rounded-xl gap-5">
                            {[...Array(12)].map((_, index) => (
                                <Skeleton key={index} />
                            ))}
                        </div>

                        :

                        <ListGames games={search ? searchGames : games} />
                }


            </section>

        </main>
    )
}
