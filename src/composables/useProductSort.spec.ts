import { ref } from 'vue'
import { describe, expect, it } from 'vitest'

import { IPhone, IProduct } from '@/types/products'

import { useProductSort } from './useProductSort.js'

describe('useProductSort', () => {
  const mockData = ref<IProduct<IPhone>>({
    products: [
      { title: 'B Product', rating: 3, price: 200, id: 1, description: 'hello' },
      { title: 'A Product', rating: 5, price: 100, id: 2, description: 'hello' },
      { title: 'C Product', rating: 4, price: 150, id: 2, description: 'hello' }
    ],
    limit: 3,
    total: 3,
    skip: 0
  })

  const { sortedProducts, sortOption, sortOptions } = useProductSort(mockData)

  it('should sort products by title', () => {
    sortOption.value = sortOptions[0]
    expect(sortedProducts.value[0].title).toBe('A Product')
    expect(sortedProducts.value[1].title).toBe('B Product')
    expect(sortedProducts.value[2].title).toBe('C Product')
  })

  it('should sort products by rating', () => {
    sortOption.value = sortOptions[1]
    expect(sortedProducts.value[0].rating).toBe(5)
    expect(sortedProducts.value[1].rating).toBe(4)
    expect(sortedProducts.value[2].rating).toBe(3)
  })

  it('should sort products by price', () => {
    sortOption.value = sortOptions[2]
    expect(sortedProducts.value[0].price).toBe(100)
    expect(sortedProducts.value[1].price).toBe(150)
    expect(sortedProducts.value[2].price).toBe(200)
  })

  it('should return original order if no sort option is selected', () => {
    sortOption.value = null
    expect(sortedProducts.value[0].title).toBe('B Product')
    expect(sortedProducts.value[1].title).toBe('A Product')
    expect(sortedProducts.value[2].title).toBe('C Product')
  })
})
