import { QUERY_STATES } from '@/constants/query'

export type IQueryState = (typeof QUERY_STATES)[keyof typeof QUERY_STATES]
