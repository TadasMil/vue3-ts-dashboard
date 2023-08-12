import {
  NavigationGuardNext,
  RouteComponent,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router'

export type IPrivateRouteRawProps = Record<
  string,
  string | number | Record<string, string> | boolean | undefined | null
>

type PropsFunction = (route: RouteLocationNormalized) => IPrivateRouteRawProps

export interface IPrivateRouteParams {
  name?: string
  path: string
  component: RouteComponent
  children?: RouteRecordRaw[]
  props?: PropsFunction
  layout?: RouteComponent | null
  beforeEnter?: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => void
}
