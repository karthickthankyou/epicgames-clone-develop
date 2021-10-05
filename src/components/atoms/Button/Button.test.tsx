import React from 'react'

import { mount } from '@cypress/react'
import Button from '.'
import '../../../index.css'

it('renders app', () => {
  mount(<Button>Hello</Button>)
})
