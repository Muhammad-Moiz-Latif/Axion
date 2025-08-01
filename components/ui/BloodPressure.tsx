import { number } from "framer-motion"
import bloodpressure from "../../assets/cardiogram.png"
import StatDisplay from "./StatDisplay"

type BloodPressureStatProps = {
  delay: number
}
export default function BloodPressure({ delay }: BloodPressureStatProps) {
  return (
    <StatDisplay
      icon={bloodpressure}
      value="118"
      unit="mmHg"
      lineRotation="-rotate-26"
      lineLength="w-8"
      lineOffset="-left-[28px] top-[19px]"
      statOffset="-left-[155px] top-[18px]"
      rotateStatBox="rotate-180" // Apply rotation to the entire component and stat box
    />
  )
}
