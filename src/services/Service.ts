import { fetchUtility } from '@/utilities/fetchUtility'

export class Service<T> {
  protected endpoint: string
  private query: Record<string, string | number> | null = null

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  setQuery(params: Record<string, string | number>): this {
    this.query = params
    return this
  }

  private getUrlWithQuery(baseUrl: string): string {
    if (this.query) {
      const stringifiedQuery: Record<string, string> = {}

      for (const key in this.query) {
        stringifiedQuery[key] = String(this.query[key])
      }

      const queryString = new URLSearchParams(stringifiedQuery).toString()
      return `${baseUrl}?${queryString}`
    }
    return baseUrl
  }

  protected async getAll(): Promise<T[]> {
    return fetchUtility<T[]>(this.getUrlWithQuery(this.endpoint))
  }

  protected async getOne(id: string): Promise<T> {
    return fetchUtility<T>(this.getUrlWithQuery(`${this.endpoint}/${id}`))
  }

  protected async create(data: T): Promise<T> {
    return fetchUtility<T>(this.endpoint, {
      method: 'POST',
      data
    })
  }

  protected async update(id: string, data: T): Promise<T> {
    return fetchUtility<T>(`${this.endpoint}/${id}`, {
      method: 'PUT',
      data
    })
  }

  protected async delete(id: string): Promise<void> {
    await fetchUtility<void>(this.getUrlWithQuery(`${this.endpoint}/${id}`), {
      method: 'DELETE'
    })
  }
}
