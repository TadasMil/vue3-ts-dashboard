import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'
import DashboardEmploymentSummary from './DashboardEmploymentSummary.vue'

describe('DashboardEmploymentSummary.vue', () => {
  it('should render title', () => {
    const { getByText } = render(DashboardEmploymentSummary)

    expect(getByText('Available Positions')).toBeInTheDocument()
    expect(getByText(21)).toBeInTheDocument()
    expect(getByText('4 Urgently needed')).toBeInTheDocument()

    expect(getByText('Job Open')).toBeInTheDocument()
    expect(getByText(10)).toBeInTheDocument()
    expect(getByText('10 Active Hiring')).toBeInTheDocument()

    expect(getByText('New Employees')).toBeInTheDocument()
    expect(getByText(8)).toBeInTheDocument()
    expect(getByText('3 Department')).toBeInTheDocument()
  })
})
