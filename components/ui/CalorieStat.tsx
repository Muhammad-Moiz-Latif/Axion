import { motion } from "framer-motion"
import calories from "../../assets/calories.png"
import StatDisplay from "./StatDisplay"

type CalorieStatProps = {
  delay: number
}

export default function CalorieStat({ delay }: CalorieStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <StatDisplay
        icon={calories}
        value="251"
        unit="kcal"
        lineRotation="-rotate-12"
        lineLength="w-32"
        lineOffset="-left-[125px] top-[31px]"
        statOffset="-left-[250px] top-[0px]"
      />
    </motion.div>
  )
}
