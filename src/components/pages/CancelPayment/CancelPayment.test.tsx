import React, { ReactElement } from 'react'

import { mountCustom } from 'src/utils/testUtils'
import CancelPayment from '.'

it('renders app', () => {
  mountCustom(<CancelPayment />)
})
