import React from 'react'

import { mountCustom } from 'src/utils/testUtils'
import Badge from '.'

it('renders app', () => {
  mountCustom(<Badge badgeText='hello' classes='bg-red-500' />)
})
