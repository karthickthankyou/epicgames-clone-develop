import React from 'react'

import { mountCustom } from 'src/utils/testUtils'
import Signin from '.'

it('renders app', () => {
  mountCustom(<Signin />)
})
