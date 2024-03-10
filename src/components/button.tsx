import { Link } from 'react-router-dom';

type Props = {
    title: string;
    onClick?: () => void;
    additionalClass?: string;
    route?: string;
}

export function Button({ title, additionalClass, route }: Props) {
    return (
        <Link to={route ? route : '/play'} className={`w-24 h-10 rounded-xl flex items-center justify-center bg-red-600 ${additionalClass}`}>
            {title}
        </Link>
    )
}
