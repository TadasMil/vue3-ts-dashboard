import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'
import DashboardRecentActivity from './DashboardRecentActivity.vue'

describe('DashboardRecentActivity.vue', () => {
  it('should render title', () => {
    const { getByText } = render(DashboardRecentActivity)

    expect(getByText('Recently Activity')).toBeInTheDocument()
    expect(getByText('10.40 AM, Fri 10 Sept 2021')).toBeInTheDocument()
    expect(getByText('You Posted a New Job')).toBeInTheDocument()

    expect(
      getByText(
        'Kindly check the requirements and terms of work and make sure everything is right.'
      )
    ).toBeInTheDocument()
    expect(getByText('Today you makes 12 Activity')).toBeInTheDocument()
    expect(getByText('See All Activity')).toBeInTheDocument()
  })
})
