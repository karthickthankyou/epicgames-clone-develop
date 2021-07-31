import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import img from '../../../assets/image.jpg'
import img2 from '../../../assets/game.jpg'
import logo from '../../../assets/cyberpunk.png'
import HomeShowcase from './HomeShowcase'

export default {
  title: 'organisms/HomeShowcase',
  component: HomeShowcase,
} as ComponentMeta<typeof HomeShowcase>

const Template: ComponentStory<typeof HomeShowcase> = ({ data }) => (
  <HomeShowcase data={data} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: [
    {
      img,
      logo,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img: img2,
      logo,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img,
      logo,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img: img2,
      logo,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img,
      logo,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
    {
      img: img2,
      logo,
      title: 'NIGHT CITY CHANGES EVERY BODY',
      desc: `Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.`,
    },
  ],
}
Primary.parameters = {}
