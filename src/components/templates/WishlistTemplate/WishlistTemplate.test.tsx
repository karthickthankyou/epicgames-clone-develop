import { mount } from '@cypress/react'
import WishlistTemplate from './WishlistTemplate'

describe('WishlistTemplate Component', () => {
  it('WishlistTemplate renders', () => {
    mount(<WishlistTemplate />)
  })
})
