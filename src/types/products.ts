export interface ISortableProduct {
  id: number
  title: string
  rating: number
  price: number
}

export interface IPhone extends ISortableProduct {
  description: string
}

export interface IProduct<T> {
  products: T[]
  limit: number
  total: number
  skip: number
}
