import React from 'react'
import { render } from '@testing-library/react'
import Modal from './Modal'

describe('Modal Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(
      <Modal open>
        <div>Hello</div>
      </Modal>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})