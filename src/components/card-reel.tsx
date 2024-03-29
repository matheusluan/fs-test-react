import { Apple, Banana, Cherry, Citrus } from "lucide-react";

type Props = {
    fruit: string;
    animation?: string;
    selected: boolean;
}

export function CardReel({ fruit, animation, selected }: Props) {
    let fruitIcon;

    switch (fruit) {
        case 'cherry':
            fruitIcon = <Cherry color='#b91c1c' size={30} />;
            break;
        case 'lemon':
            fruitIcon = <Citrus color='#a3e635' size={30} />;
            break;
        case 'apple':
            fruitIcon = <Apple color='#b91c1c' size={30} />;
            break;
        case 'banana':
            fruitIcon = <Banana color='#fde047' size={30} />;
            break;
        default:
            fruitIcon = null;
            break;
    }

    return (
        <div className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-lg flex items-center ${selected ? 'bg-slate-50 animate-pulse' : ''} justify-center ${animation} overflow-hidden `}>
            {fruitIcon}
        </div>
    )
}
