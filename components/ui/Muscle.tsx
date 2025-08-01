import bloodsaturation from "../../assets/blood.png"
import StatDisplay from "./StatDisplay"

type MuscleStatProps = {
    delay: number
}
export default function MuscleActivation({ delay }: MuscleStatProps) {
    return (
        <StatDisplay
            icon={bloodsaturation}
            value="99"
            unit="SpO2"
            lineRotation="rotate-12"
            lineLength="w-14"
            lineOffset="-left-[55px] -top-[7px]"
            statOffset="-left-[181px] -top-[37px]"
        />
    )
}
