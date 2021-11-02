import ModalUnstyled, { ModalUnstyledProps } from '@mui/core/ModalUnstyled'
import { useState } from 'react'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import { CloseIcon } from 'src/assets'

export interface IModalProps {}

const StyledModal = styled(ModalUnstyled)`
  ${tw`fixed inset-0 z-50 flex items-center justify-center`}
`

const Backdrop = styled('div')`
  ${tw`fixed inset-0 bg-opacity-50 -z-10 bg-gradient-to-tr from-black to-primary-900`}
`

const Modal = ({ open, setOpen, children }: ModalUnstyledProps) => (
  <StyledModal
    aria-labelledby='unstyled-modal-title'
    aria-describedby='unstyled-modal-description'
    open={open}
    onClose={() => setOpen(false)}
    BackdropComponent={Backdrop}
  >
    <div className='relative max-w-lg p-4 bg-gray-900 border border-gray-700 rounded shadow-lg'>
      <button
        type='button'
        className='absolute top-0 right-0 bg-gray-900 rounded-tr hover:bg-red-900'
        onClick={() => setOpen(false)}
      >
        <CloseIcon className='w-6 h-6 p-1' />
      </button>
      {children}
    </div>
  </StyledModal>
)

export default Modal
