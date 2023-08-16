import { computed, Ref, ref } from 'vue'

import { IProduct, ISortableProduct } from '@/types/products'
import { IOption } from '@/types/selectDropdown'

export const useProductSort = <T extends ISortableProduct>(data: Ref<IProduct<T>>) => {
  const sortOptions = [
    {
      id: 1,
      name: 'Title'
    },
    {
      id: 2,
      name: 'Rating'
    },
    {
      id: 3,
      name: 'Price'
    }
  ]

  const sortOption = ref<IOption | null>(null)

  const sortedProducts = computed(() => {
    if (!sortOption.value) return data.value.products

    return [...data.value.products].sort((a, b) => {
      switch (sortOption.value?.name) {
        case 'Title':
          return a.title.localeCompare(b.title)
        case 'Rating':
          return b.rating - a.rating
        case 'Price':
          return a.price - b.price
        default:
          return 0
      }
    })
  })

  return {
    sortedProducts,

    sortOption,
    sortOptions
  }
}
