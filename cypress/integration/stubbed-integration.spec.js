import React from 'react'

import { mount } from '@cypress/react'
import Badge from '../../src/components/atoms/Badge'

it('renders app', () => {
  mount(<Badge />)
})
