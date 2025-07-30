import heartrate from '../../assets/heart-rate.png';

export default function HeartRateStat() {
    return (
        <>
            <div className="flex justify-between items-center relative rotate-180">
                <div className="flex flex-col  items-center absolute -left-[250px] top-[-23px] z-20 rotate-180">
                    <div className='flex justify-end items-center w-full'>
                        <img src={heartrate.src} className='size-5 mr-1' /> 
                        <h1 className='mr-[2px] text-xl font-medium'>121</h1>
                        <h1 className='text-[12px] mt-1 text-zinc-400'>bpm</h1>
                    </div>
                    <div className="w-32 h-1 bg-[#DC2626] rounded-tl-full rounded-tr-full"></div>
                </div>

                <div className="w-32 h-[1px] bg-zinc-400 rotate-12 absolute -left-[126px] -top-[9px] z-10"></div>
                <div className="w-32 h-[1px] bg-zinc-400 rounded-l-full"></div>
                <div className="size-[10px] bg-zinc-400 rounded-full"></div>
            </div>
        </>
    )
}