import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from './Modal'

export default {
  title: 'atoms/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = ({ children }) => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button type='button' onClick={() => setOpen(true)}>
        open
      </button>
      <Modal open={open} setOpen={setOpen}>
        {children}
      </Modal>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <div>
      {' '}
      <h1 className='mb-3 text-lg font-bold'>Hello</h1> Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Sunt, exercitationem nesciunt? A, dolor
      ad deleniti inventore assumenda voluptates nihil, illo quos commodi
      facilis saepe maiores repellendus voluptatum sunt nam alias.
    </div>
  ),
}
Primary.parameters = {}
