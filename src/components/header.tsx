
import logo from '../assets/logo.svg'
import { Button } from './button';

export function Header() {
    return (
        <header className="w-full flex mx-auto md:max-w-7xl my-5 justify-between items-center px-5">

            <div className='flex gap-2'>
                <img src={logo} alt='NLW EXPERT' />
                <h1 className='font-bold text-xl'>
                    Matheus Cassino
                </h1>
            </div>

            <div className='flex gap-2'>
                <Button title='Play now' />

                <div className='w-10 h-10 flex justify-center items-center rounded-xl bg-stone-800 font-bold text-sm'>
                   20
                </div>
                
            </div>

        </header>
    )
}