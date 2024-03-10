import { Link, useLocation } from 'react-router-dom';

type Props = {
    title: string;
    onClick?: () => void;
    additionalClass?: string;
}

export function Button({ title, additionalClass }: Props) {

    const location = useLocation();
    const route = location.pathname === '/play' ? '/' : '/play';

    return (
        <Link to={route} className={`w-24 h-10 rounded-xl flex items-center justify-center bg-red-600 ${additionalClass}`}>
            {location.pathname === '/play' ? 'Home' : title}
        </Link>
    )
}
