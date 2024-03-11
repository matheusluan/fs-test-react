import { Cherry, Apple, Banana, Citrus } from "lucide-react";


export function RewardRules() {
    return (
        <div className="w-full flex flex-col gap-2 items-center justify-center">
            <h1>
                Rewards rules
            </h1>
            <div className="flex gap-2">
                <div className="flex justify-center items-center gap-3">

                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>3x</p>
                        <div className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] border rounded-lg flex items-center justify-center overflow-hidden `}>
                            <Cherry color='#b91c1c' size={30} />
                        </div>
                        <p>50 coins</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>2x</p>
                        <div className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] border rounded-lg flex items-center justify-center overflow-hidden `}>
                            <Cherry color='#b91c1c' size={30} />
                        </div>
                        <p>40 coins</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>3x</p>
                        <div className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] border rounded-lg flex items-center justify-center overflow-hidden `}>
                            <Apple color='#b91c1c' size={30} />
                        </div>
                        <p>20 coins</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>2x</p>
                        <div className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] border rounded-lg flex items-center justify-center overflow-hidden `}>
                            <Apple color='#b91c1c' size={30} />
                        </div>
                        <p>10 coins</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>3x</p>
                        <div className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] border rounded-lg flex items-center justify-center overflow-hidden `}>
                            <Banana color='#fde047' size={30} />
                        </div>
                        <p>15 coins</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>2x</p>
                        <div className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] border rounded-lg flex items-center justify-center overflow-hidden `}>
                            <Banana color='#fde047' size={30} />
                        </div>
                        <p>5 coins</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>3x</p>
                        <div className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] border rounded-lg flex items-center justify-center overflow-hidden `}>
                            <Citrus color='#a3e635' size={30} />
                        </div>
                        <p>3 coins</p>
                    </div>
                </div>
            </div>
        </div>

    )

}