import SliderUnstyled, { SliderUnstyledProps } from '@mui/core/SliderUnstyled'
import { useState } from 'react'
import styled from '@mui/material/styles/styled'
import tw from 'twin.macro'

const StyledSlider = styled(SliderUnstyled)`
  ${tw`relative inline-block w-full h-2 px-2 text-sm bg-gray-500 cursor-pointer md:text-lg opacity-70 hover:opacity-100`}
  touch-action: none;

  & .MuiSlider-rail {
    ${tw`absolute block w-full h-2 bg-current rounded-sm opacity-30`}
  }

  & .MuiSlider-track {
    ${tw`absolute block h-2 bg-current rounded-sm bg-primary-500`}
  }

  & .MuiSlider-thumb {
    ${tw`absolute w-6 h-6 -mt-2 -ml-2 -mr-2 bg-white border border-current rounded-full`}

    :hover,
    &.Mui-focusVisible {
      ${tw`shadow-sm`}
    }

    &.Mui-active {
      ${tw`shadow-sm`}
    }
  }
`

export default function UnstyledSlider({
  value,
  onChange,
  defaultValue,
  max,
  min,
}: SliderUnstyledProps) {
  return (
    <StyledSlider
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      max={max}
      min={min}
    />
  )
}
