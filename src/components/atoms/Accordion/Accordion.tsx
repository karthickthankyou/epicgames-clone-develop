/* eslint-disable react/jsx-props-no-spreading */
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails'
import Button from 'src/components/atoms/Button'

import styled from '@mui/material/styles/styled'
import { ChevronDownIcon } from 'src/assets'
import tw from 'twin.macro'
import { fullConfig } from 'tailwind.config'

console.log('fullConfig: ', fullConfig)

const AccordionMain = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters {...props} />
))(tw`text-white bg-green-500 divide-y before:hidden`)

const AccordionSummaryNo = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))`
  & .${accordionSummaryClasses.content} {
    ${tw`w-6 h-6 text-red-600 transform rotate-6`}
    & .${accordionSummaryClasses.expanded} {
      ${tw`bg-red-800 `}
    }
  }
`

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//   <MuiAccordionSummary expandIcon={<ChevronDownIcon />} {...props} />
// ))(() => ({
//   '& .MuiAccordionSummary-content': `${tw`ml-5 bg-red-500`}`,
//   // marginLeft: theme.spacing(2),
// }))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  '.sampleSummaryy': tw`border border-t-2 rotate-12`,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': tw`rotate-12`,
  // '& .MuiAccordionSummary-content': {
  //   marginLeft: theme.spacing(5),
  // },
  '& .MuiAccordionSummary-content': `${tw`p-4 m-3`}`,
}))

const AccordionSummaryNo2 = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(100deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: '.5rem',
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: '0',
  },
}))

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }))
const AccordionDetailsNo1 = styled(MuiAccordionDetails)``

// Come on

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export interface IAccordionProps {}

const Accordion = () => (
  <div className='rotate-12'>
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
        <div className='max-w-xs'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </AccordionDetails>
    </AccordionMain>
  </div>
)

export default Accordion
