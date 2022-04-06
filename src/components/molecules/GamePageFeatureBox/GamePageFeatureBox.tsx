export interface IGamePageFeatureBoxProps {
  title: string
  value: string
}

const GamePageFeatureBox = ({ title, value }: IGamePageFeatureBoxProps) => (
  <div className='p-3'>
    <div className='text-gray-400'>{title}</div>
    <div>{value}</div>
  </div>
)

export default GamePageFeatureBox
