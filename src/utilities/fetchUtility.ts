type FetchOptions<RequestBody = unknown> = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: RequestBody
}

export const makeHttpRequest = async <ResponseBody, RequestBody = unknown>(
  url: string,
  options?: FetchOptions<RequestBody>
): Promise<ResponseBody> => {
  const headers = {
    'Content-Type': 'application/json'
  }

  const config: RequestInit = {
    headers,
    method: options?.method || 'GET'
  }

  if (options?.data) {
    config.body = JSON.stringify(options.data)
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    switch (response.status) {
      case 403:
        throw new Error('403')
      case 404:
        throw new Error('404')
      case 500:
        throw new Error('500')
      default:
        throw new Error(`Failed to fetch from ${url}`)
    }
  }

  return response.json()
}
