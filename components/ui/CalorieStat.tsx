import calories from '../../assets/calories.png';

export default function CalorieStat() {
    return (
        <>
            <div className="flex justify-between items-center relative">
                <div className="flex flex-col  items-center absolute -left-[250px] top-[0px] z-20">
                    <div className='flex justify-center items-center w-full'>
                        <img src={calories.src} className='size-4 mr-2' /> 
                        <h1 className='mr-[2px] text-xl font-medium'>251</h1>
                        <h1 className='text-[12px] mt-1 text-zinc-400'>kcal</h1>
                    </div>
                    <div className="w-32 h-1 bg-[#DC2626] rounded-tl-full rounded-tr-full"></div>
                </div>

                <div className="w-32 h-[1px] bg-zinc-400 -rotate-12 absolute -left-[126px] top-[18px] z-10"></div>
                <div className="w-32 h-[1px] bg-zinc-400 rounded-l-full"></div>
                <div className="size-[10px] bg-zinc-400 rounded-full"></div>
            </div>
        </>
    )
}