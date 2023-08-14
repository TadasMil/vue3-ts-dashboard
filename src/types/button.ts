import { ButtonColors, ButtonDensities, ButtonRoundeds, ButtonVariants } from '@/constants/button'

export type ButtonColor = (typeof ButtonColors)[keyof typeof ButtonColors]
export type ButtonDensity = (typeof ButtonDensities)[keyof typeof ButtonDensities]
export type ButtonVariant = (typeof ButtonVariants)[keyof typeof ButtonVariants]
export type ButtonRounded = (typeof ButtonRoundeds)[keyof typeof ButtonRoundeds]
