import { format, isToday } from 'date-fns'

export const formatTimestamp = (timestamp: number) => {
  if (isToday(timestamp)) {
    const time = format(timestamp, 'hh.mm a')
    return `Today - ${time}`
  } else {
    return format(timestamp, 'MMMM dd, yyyy - hh.mm a')
  }
}
