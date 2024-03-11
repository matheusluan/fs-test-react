
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

import logo from '../assets/logo.svg'
import { Button } from './button';

export function Header() {

    //Get coins from global state
    const coins = useSelector((state: RootState) => state.coin.value);

    return (
        <header className="w-full flex mx-auto md:max-w-7xl my-5 justify-between items-center px-5">

            <div className='flex gap-2'>
                <img src={logo} alt='logo' />
                <h1 className='font-bold text-xl'>
                    Matheus Games
                </h1>
            </div>

            <div className='flex gap-2'>
                <Button title='Play now' />

                <div className='w-10 h-10 flex justify-center items-center rounded-xl bg-stone-800 font-bold text-sm'>
                    {coins}
                </div>

            </div>

        </header>
    )
}