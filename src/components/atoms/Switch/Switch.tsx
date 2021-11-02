/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import SwitchUnstyled, {
  switchUnstyledClasses,
  SwitchInputProps,
} from '@mui/core/SwitchUnstyled'
import styled from 'styled-components/macro'
import tw from 'twin.macro'

const Root = styled('span')`
  ${tw`relative inline-block w-8 h-5`}

  &.${switchUnstyledClasses.disabled} {
    ${tw`cursor-not-allowed opacity-40`}
  }

  & .${switchUnstyledClasses.track} {
    ${tw`absolute block w-full h-full transition-all bg-gray-400 border-2 border-gray-100 rounded-full`}
  }

  & .${switchUnstyledClasses.thumb} {
    ${tw`relative block w-4 h-4 transition-all bg-white rounded-full top-0.5 left-0.5 shadow-md`}
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    ${tw`bg-white opacity-100`}
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      ${tw`bg-white shadow-sm left-3.5`}
    }

    .${switchUnstyledClasses.track} {
      ${tw`shadow-inner bg-primary-600`}
    }
  }

  & .${switchUnstyledClasses.input} {
    ${tw`absolute top-0 left-0 z-10 w-full h-full opacity-0 cursor-pointer`}
  }
`

export default function UnstyledSwitches({
  checked,
  defaultChecked,
  disabled,
  onBlur,
  onChange,
  onFocus,
  readOnly,
  ref,
  required,
}: Partial<SwitchInputProps>) {
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } }
  return (
    <SwitchUnstyled
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      readOnly={readOnly}
      ref={ref}
      required={required}
      component={Root}
      {...label}
    />
  )
}
