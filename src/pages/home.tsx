
import { ChangeEvent, useEffect, useState } from 'react'

import { Banner } from '../components/banner';
import { Header } from '../components/header';
import { Divider } from '../components/divider'
import { ListGames } from '../components/list-games';

import { toast } from 'sonner';

import { Game } from '../types/game';

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
            const response = await fetch(`http://localhost:3333/games`);

            if (!response.ok) {
                toast.success('Failed to fetch games.');
            }

            const games: Game[] = await response.json();

            if (games) {
                setGames(games);
            }

        } catch (error: any) {
            console.error('Error fetching games:', error.message);
            return [];
        }
    }

    //Search games
    async function fetchSearchGames() {
        try {
            const response = await fetch(`http://localhost:3333/games/${search}`);

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
        }
    }

    //Handle the typing
    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value;

        setSearch(query.toLocaleLowerCase())
    }

    //Use effects
    useEffect(() => {
        setLoading(true);
        fetchGames()
        setLoading(false);
    }, [])

    useEffect(() => {

        if (!search) {
            return
        }

        setLoading(true);
        fetchSearchGames()
        setLoading(false);

    }, [search])

    return (
        <main className='w-full'>

            <Header />

            <Divider />

            <section className='mx-auto max-w-5xl my-5'>

                <Banner />

                <input
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search a game by title"
                    className="h-30 mt-5 text-stone-600 rounded-lg bg-neutral-800 px-4 py-2 w-full outline-none focus:outline-none focus:ring"
                />

                <ListGames games={search ? searchGames : games} loading={loading} />

            </section>

        </main>
    )
}
