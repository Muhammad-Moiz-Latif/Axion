// components/ui/HeroMetric.tsx

"use client";

import { motion } from "framer-motion";
import {
    Activity,
    HeartPulse,
    Flame,
    Droplets,
} from "lucide-react";

interface HeroMetricProps {
    id: string;

    value: string;
    unit: string;
    label: string;

    anchor: {
        x: number;
        y: number;
    };

    box: {
        x: number;
        y: number;
    };

    side: "left" | "right";

    delay?: number;
}

const icons = {
    oxygen: Droplets,
    heart: HeartPulse,
    calories: Flame,
    pressure: Activity,
};

export default function HeroMetric({
    id,
    value,
    unit,
    label,
    anchor,
    box,
    side,
    delay = 0,
}: HeroMetricProps) {
    const Icon = icons[id as keyof typeof icons] ?? Activity;

    /*
     * The metric card is positioned in the SAME 16:9
     * coordinate system as the image.
     */

    return (
        <motion.div
            className="absolute z-30"
            style={{
                left: `${anchor.x + box.x}%`,
                top: `${anchor.y + box.y}%`,
            }}
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay,
                duration: 0.55,
                ease: "easeOut",
            }}
        >
            <div
                className={`
          flex
          min-w-[105px]
          flex-col
          ${side === "right" ? "items-end text-right" : "items-start text-left"}
        `}
            >
                {/* tiny technical label */}

                <div
                    className={`
            mb-1
            flex
            items-center
            gap-1.5
            ${side === "right" ? "flex-row-reverse" : ""}
          `}
                >
                    <Icon
                        size={10}
                        strokeWidth={1.7}
                        className="text-[#DC2626]"
                    />

                    <span className="text-[7px] font-medium tracking-[0.22em] text-zinc-500">
                        {label}
                    </span>
                </div>

                {/* value */}

                <div
                    className={`
            flex
            items-baseline
            gap-1
            ${side === "right" ? "justify-end" : ""}
          `}
                >
                    <span className="text-lg font-medium leading-none tracking-[-0.03em] text-white sm:text-xl">
                        {value}
                    </span>

                    <span className="text-[8px] tracking-wider text-zinc-500">
                        {unit}
                    </span>
                </div>

                {/* red data indicator */}

                <div
                    className={`
            mt-1
            flex
            w-full
            items-center
            gap-1
            ${side === "right" ? "flex-row-reverse" : ""}
          `}
                >
                    <motion.span
                        className="h-[2px] flex-1 rounded-full bg-[#DC2626]"
                        initial={{
                            scaleX: 0,
                        }}
                        animate={{
                            scaleX: 1,
                        }}
                        transition={{
                            delay: delay + 0.3,
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                        style={{
                            transformOrigin:
                                side === "right"
                                    ? "right"
                                    : "left",
                        }}
                    />

                    <span className="size-[3px] rounded-full bg-zinc-600" />
                </div>
            </div>
        </motion.div>
    );
}