
type Props = {
    title: string;
    onClick?: () => void;
}

export function Button({ title }: Props) {
    return (
        <button className='w-24 h-10 rounded-xl bg-red-600'>
            {title}
        </button>
    )
}