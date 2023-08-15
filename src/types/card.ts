export interface ICardClasses {
  root: string
  header: string
  body: string
  title: string
  subtitle: string
  content: string
  footer: string
}

export interface ICardPassThroughOptions {
  root?: Record<string, unknown>
  header?: Record<string, unknown>
  body?: Record<string, unknown>
  title?: Record<string, unknown>
  subtitle?: Record<string, unknown>
  content?: Record<string, unknown>
  footer?: Record<string, unknown>
}
