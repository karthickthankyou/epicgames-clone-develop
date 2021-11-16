/* eslint-disable react/jsx-props-no-spreading */
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails'

import styled from '@mui/material/styles/styled'
import { ChevronDownIcon } from 'src/assets'
/* @ts-ignore */
import tw from 'twin.macro'

const AccordionMain = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(tw`text-gray-100 bg-gray-900 divide-y`)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ChevronDownIcon />} {...props} />
))({
  '& .MuiAccordionSummary-content': tw`text-gray-200`,
  '& .MuiAccordionSummary-content.Mui-expanded': tw`text-white`,
  '& .MuiAccordionSummary-expandIconWrapper': tw`flex items-center justify-center w-8 h-8 text-white transform`,
  '& .MuiAccordionSummary-expandIconWrapper svg': tw`w-12 h-12`,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': tw`transform rotate-45 bg-secondary-500`,
})

const AccordionDetails = styled(MuiAccordionDetails)(tw`p-8`)

export interface IAccordionProps {}

const Accordion = () => (
  <div>
    <AccordionMain>
      <AccordionSummary
        expandIcon={<ChevronDownIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        Hello World
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </AccordionMain>
    <AccordionMain>
      <AccordionSummary
        expandIcon={<ChevronDownIcon className='w-4 h-4 text-white' />}
        aria-controls='panel2a-content'
        id='panel2a-header'
      >
        Hello World 2
      </AccordionSummary>
      <AccordionDetails>
        <div className='max-w-xs transform rotate-45'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </AccordionDetails>
    </AccordionMain>
  </div>
)

export default Accordion
