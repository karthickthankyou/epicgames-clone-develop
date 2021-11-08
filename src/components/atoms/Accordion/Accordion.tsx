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
import tw, { css } from 'twin.macro'

const AccordionMain = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(
  css`
    ${tw`text-gray-100 bg-gray-900 divide-y`}
  `
)
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ChevronDownIcon />} {...props} />
))({
  '& .MuiAccordionSummary-content': tw`text-gray-200`,
  '& .MuiAccordionSummary-content.Mui-expanded': tw`text-white`,
  '& .MuiAccordionSummary-expandIconWrapper': tw`flex items-center justify-center w-8 h-8 text-white transform`,
  '& .MuiAccordionSummary-expandIconWrapper svg': tw`w-12 h-12`,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': tw`transform rotate-45 bg-secondary-500`,
})

const AccordionSummary33 = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ChevronDownIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-content': `@apply text-blue-600 m-4 bg-red-700`,
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'green',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
}))

const AccordionSummary111 = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ChevronDownIcon className='w-4 h-4 text-white' />}
    {...props}
  />
))(css`
  '& .muiaccordionsummary-expandiconwrapper.mui-expanded':${tw`text-red-600 rotate-90`}
  '& .MuiAccordionSummary-expandIconWrapper':${tw`text-green-400`}
  '& .MuiAccordionSummary-content': ${tw`text-blue-400`}
`)

// ${accordionSummaryClasses.expandIconWrapper}:${tw`w-5 h-5 text-blue-300`},

const AccordionSummary343 = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ChevronDownIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '&.MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '&.MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(css`
  ${tw`p-8`}
`)

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
