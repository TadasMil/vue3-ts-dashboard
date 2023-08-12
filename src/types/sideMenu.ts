import { RouteLocationNamedRaw } from 'vue-router'

import { IconType } from './icons'

export interface ISidebarMenu {
  title: string
  links: ISidebarMenuLink[]
}

export interface ISidebarMenuLink {
  label: string
  icon: IconType
  to: RouteLocationNamedRaw
}
