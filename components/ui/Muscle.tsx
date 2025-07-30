import bloodsaturation from '../../assets/blood.png';

export default function MuscleActivation() {
    return (
        <>
            <div className="flex justify-between items-center relative">
                <div className="flex flex-col  items-center absolute -left-[181px] -top-[37px] z-20">
                    <div className='flex justify-end items-center w-full'>
                        <img src={bloodsaturation.src} className='size-6 mr-[2px]' /> 
                        <h1 className='mr-[2px] text-xl font-medium'>99</h1>
                        <h1 className='text-[12px] mt-1 text-zinc-400'>SpO2</h1>
                    </div>
                    <div className="w-32 h-1 bg-[#DC2626] rounded-tl-full rounded-tr-full"></div>
                </div>

                <div className="w-14 h-[1px] bg-zinc-400 rotate-12 absolute -left-[55px] -top-[1px] z-10"></div>
                <div className="w-14 h-[1px] bg-zinc-400 rounded-l-full"></div>
                <div className="size-[10px] bg-zinc-400 rounded-full"></div>
            </div>
        </>
    )
}