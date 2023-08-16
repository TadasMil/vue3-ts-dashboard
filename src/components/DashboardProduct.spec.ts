import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import DashboardProduct from './DashboardProduct.vue'

describe('DashboardProduct.vue', () => {
  it('should render title', () => {
    const { html } = render(DashboardProduct, {
      props: {
        title: 'Title',
        description: 'Description',
        rating: 4.2,
        price: 200
      }
    })

    expect(html()).toMatchSnapshot()
  })
})
