import { Link, useHistory } from 'react-router-dom'
import Badge from '@atoms/Badge'
import { Game } from '@epictypes/index'
import { updateUserGames } from '@epicfirebase/crud'
import { useAppSelector } from '@store/hooks'
import { selectUser } from '@store/userSlice'
import Price from '@atoms/Price/Price'

export interface IGameCard05Props {
  game: Game
}

const KeyValue = ({ label, value }: { label: string; value: string }) => (
  <div className='flex justify-between py-2'>
    <div className='text-gray-400'>{label}</div>
    <div className='text-gray-200'>{value}</div>
  </div>
)

const GameCard05 = ({ game }: IGameCard05Props) => {
  const getDate = (date: string) => new Date(date).toLocaleDateString()

  const values = [
    { label: 'Developer', value: game?.developer || '' },
    { label: 'Publisher', value: game.publisherId || '' },
    { label: 'Release Date', value: getDate(game.releaseDate) || '' },
    { label: 'Platform', value: 'Windows' },
  ]

  console.log(game)
  const { uid } = useAppSelector(selectUser)
  const history = useHistory()

  return (
    <div>
      <div className='mt-6 bg-primary aspect-w-16 aspect-h-9 bg-opacity-10'>
        <img
          className='object-contain object-center w-full p-2'
          src={game.subImageUrl}
          alt=''
        />
      </div>

      <Badge badgeText='base game' classes='mt-4' />
      <Price price={game.price} classes='mt-2' />
      {game.purchased ? (
        <Link
          to='/library'
          className='flex justify-center w-full mt-4 bg-primary btn btn-xl'
        >
          In Library
        </Link>
      ) : (
        <>
          <button
            className='w-full mt-4 bg-primary btn btn-xl'
            type='button'
            onClick={() =>
              updateUserGames({
                uid: uid || '',
                gameId: game.id,
                status:
                  game.status === 'IN_CART' ? 'REMOVED_FROM_CART' : 'IN_CART',
                history,
              })
            }
          >
            {game.inCart ? 'In Cart' : 'Add to cart'}
          </button>

          <button
            className='flex items-center justify-center w-full mt-2 border btn btn-xl'
            type='button'
            onClick={() =>
              updateUserGames({
                uid: uid || '',
                gameId: game.id,
                status: game.wishlisted
                  ? 'REMOVED_FROM_WISHLIST'
                  : 'WISHLISTED',
                history,
              })
            }
          >
            {game.wishlisted ? 'In Wishlist' : 'Wishlist'}
          </button>
        </>
      )}
      <div className='mt-2 text-sm divide-y divide-gray-700'>
        {values.map(({ label, value }) => (
          <KeyValue key={label} label={label} value={value} />
        ))}
      </div>
    </div>
  )
}

export default GameCard05
