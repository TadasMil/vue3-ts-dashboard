import { Service } from './Service'

export class ProductService<T> extends Service<T> {
  constructor() {
    super(`https://dummyjson.com/products/category`)
  }
}

export class SmartphoneService<T> extends ProductService<T> {
  constructor() {
    super()
    this.endpoint = `${this.endpoint}/smartphones`
  }

  async getAll(): Promise<T> {
    return super.getAll()
  }

  async create(data: T): Promise<T> {
    return super.create(data)
  }
}
