import workoutplanIcon from "../assets/report.png"
import nutritionplanningIcon from "../assets/meal.png"
import coachingIcon from "../assets/whistle.png"
import routineIcon from "../assets/calendar.png"

// Define a type for content blocks within service detail pages
export type ServiceContentBlock =
  | { type: "text"; title: string; description: string }
  | {
      type: "image-text"
      title: string
      description: string
      image: string
      imageAlt: string
      layout: "left" | "right"
    }
  | { type: "features"; title: string; features: string[] }
  | { type: "steps"; title: string; steps: { title: string; description: string }[] }

export interface Service {
  id: string
  title: string
  shortDescription: string // For the main services page
  icon: string // Path to icon image
  href: string
  detail: {
    heroTitle: string
    heroDescription: string
    content: ServiceContentBlock[]
    callToActionText: string
  }
}

export const servicesData: Service[] = [
  {
    id: "personalized-workout-plans",
    title: "Personalized Workout Plans",
    shortDescription: "Tailored fitness routines based on your body type, goals, and progress.",
    icon: workoutplanIcon.src,
    href: "/services/personalized-workout-plans",
    detail: {
      heroTitle: "Your Blueprint to Peak Performance",
      heroDescription:
        "Unlock your full potential with workout plans meticulously crafted for your unique physiology and aspirations. Every rep, every set, designed for your success.",
      content: [
        {
          type: "image-text",
          title: "Data-Driven Customization",
          description:
            "Our AI-powered algorithms analyze your biometrics, performance history, and goals to generate a dynamic workout plan that adapts as you progress. Say goodbye to generic routines.",
          image: "/placeholder.svg?height=400&width=600&query=futuristic gym interface, glowing biometric data overlay",
          imageAlt: "Futuristic gym interface with biometric data",
          layout: "right",
        },
        {
          type: "features",
          title: "Key Features",
          features: [
            "Adaptive Training Cycles",
            "Strength & Conditioning Modules",
            "Cardio Optimization",
            "Recovery Protocols",
            "Progress Visualization Dashboards",
          ],
        },
        {
          type: "text",
          title: "Beyond the Basics",
          description:
            "We don't just give you exercises; we provide a comprehensive strategy. From periodization to deload weeks, every aspect is considered to prevent plateaus and maximize gains.",
        },
      ],
      callToActionText: "Start Your Personalized Plan",
    },
  },
  {
    id: "nutrition-planning",
    title: "Nutrition Planning",
    shortDescription: "Custom diet strategies that complement your workouts and optimize health.",
    icon: nutritionplanningIcon.src,
    href: "/services/nutrition-planning",
    detail: {
      heroTitle: "Fuel Your Body, Optimize Your Results",
      heroDescription:
        "Nutrition is the cornerstone of performance. Our expert-designed plans ensure your body gets the precise fuel it needs to recover faster, build stronger, and perform better.",
      content: [
        {
          type: "image-text",
          title: "Precision Macronutrient Tracking",
          description:
            "Leverage our advanced tools to track your macros and micros with unparalleled accuracy. Our system provides real-time feedback and adjusts recommendations based on your activity and goals.",
          image: "/placeholder.svg?height=400&width=600&query=digital food analysis, glowing nutrient breakdown",
          imageAlt: "Digital food analysis with glowing nutrient breakdown",
          layout: "left",
        },
        {
          type: "steps",
          title: "Our Nutrition Process",
          steps: [
            { title: "Assessment", description: "Detailed analysis of your dietary habits and health goals." },
            { title: "Custom Plan", description: "Creation of a personalized meal plan with diverse options." },
            { title: "Tracking & Adjustment", description: "Monitor intake and adapt the plan for optimal results." },
          ],
        },
        {
          type: "text",
          title: "Recipes & Meal Prep",
          description:
            "Access a vast library of delicious, performance-enhancing recipes. Our meal prep guides make healthy eating convenient and sustainable, fitting seamlessly into your busy life.",
        },
      ],
      callToActionText: "Get Your Custom Nutrition Plan",
    },
  },
  {
    id: "one-on-one-coaching",
    title: "1-on-1 Coaching",
    shortDescription: "Direct guidance, motivation, and feedback from certified trainers.",
    icon: coachingIcon.src,
    href: "/services/one-on-one-coaching",
    detail: {
      heroTitle: "Unleash Your Potential with Expert Guidance",
      heroDescription:
        "Experience the power of personalized mentorship. Our certified coaches provide dedicated support, accountability, and insights to accelerate your progress and overcome any challenge.",
      content: [
        {
          type: "image-text",
          title: "Virtual Coaching, Real Results",
          description:
            "Connect with your dedicated coach through our secure virtual platform. Receive live feedback on your form, discuss strategies, and get motivated from anywhere in the world.",
          image:
            "/placeholder.svg?height=400&width=600&query=virtual coaching session, trainer and client interacting via holographic display",
          imageAlt: "Virtual coaching session with holographic display",
          layout: "right",
        },
        {
          type: "features",
          title: "What You Get",
          features: [
            "Weekly Video Check-ins",
            "24/7 Messaging Support",
            "Form Analysis & Correction",
            "Mindset & Motivation Coaching",
            "Goal Setting & Accountability",
          ],
        },
        {
          type: "text",
          title: "Your Partner in Success",
          description:
            "Our coaches are more than just trainers; they are your partners in achieving greatness. They're committed to understanding your unique needs and guiding you every step of the way.",
        },
      ],
      callToActionText: "Book Your Coaching Session",
    },
  },
  {
    id: "fitness-challenges",
    title: "Fitness Challenges",
    shortDescription: "Engaging goals and competitions to keep you motivated and consistent.",
    icon: routineIcon.src,
    href: "/services/fitness-challenges",
    detail: {
      heroTitle: "Conquer New Heights with Axion Challenges",
      heroDescription:
        "Push your limits, compete with a global community, and earn recognition. Our fitness challenges are designed to ignite your competitive spirit and drive unparalleled results.",
      content: [
        {
          type: "image-text",
          title: "Dynamic Leaderboards & Rewards",
          description:
            "Track your progress against others in real-time on our interactive leaderboards. Earn exclusive badges, unlock rewards, and celebrate your achievements with the Axion community.",
          image:
            "/placeholder.svg?height=400&width=600&query=group of athletes in a neon-lit arena, digital leaderboard",
          imageAlt: "Athletes in a neon-lit arena with digital leaderboard",
          layout: "left",
        },
        {
          type: "features",
          title: "Challenge Types",
          features: [
            "Strength & Endurance Challenges",
            "Weight Loss Transformations",
            "Skill-Based Competitions",
            "Team Challenges",
            "Monthly & Seasonal Events",
          ],
        },
        {
          type: "text",
          title: "Community & Motivation",
          description:
            "Join a supportive network of fellow challengers. Share your journey, celebrate victories, and find the extra motivation you need to push through every barrier.",
        },
      ],
      callToActionText: "Join a Fitness Challenge",
    },
  },
]

export function getServiceById(id: string): Service | undefined {
  return servicesData.find((service) => service.id === id)
}
