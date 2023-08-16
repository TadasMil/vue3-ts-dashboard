export const isEmpty = (value: unknown) =>
  value === undefined ||
  value === null ||
  value === false ||
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)
