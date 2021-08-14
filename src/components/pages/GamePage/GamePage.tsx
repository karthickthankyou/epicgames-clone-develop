import { useParams } from 'react-router-dom'

export interface IGamePageProps {}

const GamePage = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}

export default GamePage
