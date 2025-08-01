import heartrate from "../../assets/heart-rate.png"
import StatDisplay from "./StatDisplay"

type HeartStatProps = {
    delay : number
}

export default function HeartRateStat({delay} : HeartStatProps) {
  return (
    <StatDisplay
      icon={heartrate}
      value="121"
      unit="bpm"
      lineRotation="rotate-12"
      lineLength="w-32"
      lineOffset="-left-[123px] -top-[22px]"
      statOffset="-left-[250px] top-[-23px]"
      rotateStatBox="rotate-180" // Apply rotation to the entire component and stat box
    />
  )
}
