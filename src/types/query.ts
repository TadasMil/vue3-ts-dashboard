import { STATES } from '@/constants/state'

export type IQueryState = (typeof STATES)[keyof typeof STATES]
