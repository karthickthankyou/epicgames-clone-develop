import { mount } from '@cypress/react'
import LibraryTemplate from './LibraryTemplate'

describe('LibraryTemplate Component', () => {
  it('LibraryTemplate renders', () => {
    mount(<LibraryTemplate />)
  })
})
