import bloodpressure from '../../assets/cardiogram.png';

export default function BloodPressure() {
    return (
        <>
            <div className="flex justify-between items-center relative rotate-180">
                <div className="flex flex-col  items-center absolute -left-[155px] top-[18px] z-20 rotate-180">
                    <div className='flex justify-end items-center w-full'>
                        <img src={bloodpressure.src} className='size-5 mr-1' /> 
                        <h1 className='mr-[2px] text-xl font-medium'>118</h1>
                        <h1 className='text-[12px] mt-1 text-zinc-400'>mmHg</h1>
                    </div>
                    <div className="w-32 h-1 bg-[#DC2626] rounded-tl-full rounded-tr-full"></div>
                </div>

                <div className="w-8 h-[1px] bg-zinc-400 -rotate-26 absolute -left-[30px] top-[12px] z-10"></div>
                <div className="w-8 h-[1px] bg-zinc-400 rounded-l-full"></div>
                <div className="size-[10px] bg-zinc-400 rounded-full"></div>
            </div>
        </>
    )
}