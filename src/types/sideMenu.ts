import { RouteLocationNamedRaw } from 'vue-router'

import { IconType } from './icons'

export interface ISideMenuLink {
  label: string
  icon: IconType
  to: RouteLocationNamedRaw
}
