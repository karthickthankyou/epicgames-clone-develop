import { Helmet } from 'react-helmet'

export interface ICustomHelmetProps {
  title: string
  description: string
}

const CustomHelmet = ({ title, description }: ICustomHelmetProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
  </Helmet>
)

export default CustomHelmet
