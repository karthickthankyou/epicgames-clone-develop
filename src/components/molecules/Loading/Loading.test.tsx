import { mount } from '@cypress/react'
import Loading from './Loading'

describe('Loading Component', () => {
  it('Loading renders', () => {
    mount(<Loading />)
  })
})
