import React, { ReactElement, useState } from 'react'
import {
  CartSolid,
  CartReg,
  GiftSolid,
  GiftReg,
  HeartSolid,
  HeartReg,
  StarReg,
  StarSolid,
  BriefcaseReg,
  BriefcaseSolid,
  ThumbsdownReg,
  ThumbsupReg,
  ThumbsdownSolid,
  ThumbsupSolid,
  LoaderReg,
  MenuReg,
  SearchReg,
  CloseReg,
  CheckReg,
  ChevronDownReg,
  ChevronUpReg,
  ClipboardReg,
  CopyrightReg,
  InfoReg,
  InfoSolid,
  AppleSolid,
  DiscordSolid,
  YoutubeSolid,
  TwitterSolid,
  InstagramSolid,
  FacebookSolid,
  GoogleSolid,
  EducationSolid,
  InfinityReg,
  WarningReg,
  BuildingSolid,
  NotificationReg,
  NotificationSolid,
} from 'src/assets'
import { useForgetAfterSometime } from 'src/hooks'

export interface IIconsProps {}

const RenderIcons = ({
  title,
  items,
}: {
  title: string
  items: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >[]
}) => {
  const [selected, setSelected] = useForgetAfterSometime()
  const select = (item: string) => {
    setSelected(item)
    navigator.clipboard.writeText(item)
  }
  return (
    <>
      <div className='mt-5 mb-3 text-lg font-semibold text-gray-200'>
        {title}
      </div>
      <div className='grid grid-cols-2 gap-3 mx-auto sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 '>
        {items.map((Icon) => {
          const iconName: string = Icon.displayName || ''
          return (
            <div key={iconName} className='aspect-w-1 aspect-h-1'>
              <div className='flex flex-col items-center justify-center p-2 bg-gray-600 border border-white rounded shadow'>
                <Icon className='w-12 h-12 p-2 mt-auto' />
                <button
                  type='button'
                  onClick={() => select(iconName)}
                  className='mt-auto text-sm text-gray-600'
                >
                  {selected === iconName && (
                    <div className='text-xs'>{iconName} copied.</div>
                  )}
                  {iconName}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

const Icons = () => (
  <div className='bg-gray-700'>
    <div className='container mx-auto'>
      <h1 className='text-3xl font-thin'>Icons</h1>
      <p className='mt-3 text-gray-700'>Import icons from the assets index.</p>
      <code className='inline-block p-3 mt-2 text-sm text-white bg-gray-600 rounded'>
        {"import { IconName } from 'src/assets'"}{' '}
      </code>
      <p className='flex items-center mt-3 text-gray-700'>
        <InfoReg className='inline-block w-4 h-4 p-1 ' /> Click on the Icon name
        to copy the text.
      </p>
      <RenderIcons
        title='Collectables'
        items={[
          HeartSolid,
          HeartReg,
          CartSolid,
          CartReg,
          GiftSolid,
          GiftReg,
          StarSolid,
          StarReg,
          BriefcaseSolid,
          BriefcaseReg,
          ThumbsupSolid,
          ThumbsupReg,
          ThumbsdownSolid,
          ThumbsdownReg,
        ]}
      />
      <RenderIcons
        title='Essentials'
        items={[
          SearchReg,
          MenuReg,
          CheckReg,
          CloseReg,
          LoaderReg,
          ChevronDownReg,
          ChevronUpReg,
          NotificationReg,
          NotificationSolid,
          InfoSolid,
          InfoReg,
        ]}
      />
      <RenderIcons
        title='Social Media'
        items={[
          YoutubeSolid,
          TwitterSolid,
          InstagramSolid,
          FacebookSolid,
          AppleSolid,
          GoogleSolid,
          DiscordSolid,
        ]}
      />
      <RenderIcons
        title='Misc'
        items={[
          EducationSolid,
          ClipboardReg,
          CopyrightReg,
          // InfinityReg,
          WarningReg,
          BuildingSolid,
        ]}
      />
    </div>
  </div>
)

export default Icons
