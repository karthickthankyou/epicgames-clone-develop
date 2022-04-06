import React from 'react'
import { mount } from '@cypress/react'
import Animations from './Animations'

describe('Animations Component', () => {
  it('Animations renders', () => {
    mount(<Animations />)
  })
})
