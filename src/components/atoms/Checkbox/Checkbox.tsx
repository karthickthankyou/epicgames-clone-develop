import Checkbox, { CheckboxProps } from '@mui/material/Checkbox/Checkbox'
import styled from '@mui/material/styles/styled'
import tw from 'twin.macro'

export interface ICheckboxProps {}

const BpIcon = styled('span')`
  ${tw`w-5 h-5 rounded shadow-inner bg-primary-600 bg-gradient-to-b from-primary-600 to-primary-700 `}
  .mui-focusvisible &: ${tw`outline-white`}
  input:hover ~ &: ${tw`bg-primary-800`}
  input:disabled ~ &: ${tw`bg-gray-700 shadow-none cursor-not-allowed`}
`

const BpCheckedIcon = styled(BpIcon)`
  ${tw`w-5 h-5 bg-gradient-to-b from-primary-500 to-primary-600 bg-check`}
  input:hover ~ &: ${tw`bg-primary-400`}
`

// Inspired by blueprintjs
function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color='default'
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
}
export default BpCheckbox
