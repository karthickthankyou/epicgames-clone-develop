import React from 'react'

import { mountCustom } from 'src/utils/testUtils'
import Cart from '.'

it('renders app', () => {
  mountCustom(<Cart />)
})
