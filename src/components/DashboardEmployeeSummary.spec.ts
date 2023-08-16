import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'
import DashboardEmployeeSummary from './DashboardEmployeeSummary.vue'

describe('DashboardEmployeeSummary.vue', () => {
  it('should render title', () => {
    const { getByText } = render(DashboardEmployeeSummary)

    expect(getByText('Total Employees')).toBeInTheDocument()
    expect(getByText(216)).toBeInTheDocument()
    expect(getByText('120 Men')).toBeInTheDocument()
    expect(getByText('96 Women')).toBeInTheDocument()
    expect(getByText('+2% Past month')).toBeInTheDocument()

    expect(getByText('Talent Request')).toBeInTheDocument()
    expect(getByText(216)).toBeInTheDocument()
    expect(getByText('6 Men')).toBeInTheDocument()
    expect(getByText('10 Women')).toBeInTheDocument()
    expect(getByText('+5% Past month')).toBeInTheDocument()
  })
})
