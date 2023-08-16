import LayoutAuthenticated from '@/components/LayoutAuthenticated.vue'

import { IPrivateRouteParams } from '@/types/routes'

export const createPrivateRoute = ({
  name,
  path,
  props,
  children,
  component,
  beforeEnter,

  // Meta params
  layout = LayoutAuthenticated
}: IPrivateRouteParams) => ({
  name,
  path,
  children,
  component,
  beforeEnter,
  props,
  meta: {
    layout
  }
})
