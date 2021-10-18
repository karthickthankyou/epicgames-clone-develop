import { SetStateAction, Dispatch } from 'react'
import { ReactComponent as ChevronDown } from 'src/assets/svgs/chevron-down.svg'
import { ReactComponent as ChevronUp } from 'src/assets/svgs/chevron-up.svg'

export interface IAccordionHeaderProps {}

const AccordionHeader = ({
  name,
  open,
  setOpen,
}: {
  name: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => (
  <button
    type='button'
    className={` flex justify-between w-full p-4 tracking-widest text-left text-gray-300 uppercase ${
      open && 'bg-gray-800 '
    }`}
    onClick={() => setOpen((state) => !state)}
  >
    {name}
    {open ? (
      <ChevronUp className='w-4 h-4 ml-auto text-gray-200' />
    ) : (
      <ChevronDown className='w-4 h-4 ml-auto text-gray-500' />
    )}
  </button>
)

export default AccordionHeader
