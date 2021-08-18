import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Badge from '../../atoms/Badge'
import Price from '../../atoms/Price'
import image from '../../../assets/game.jpg'
import { Game } from '../../../types'
import { updateUserGames } from '../../../firebase/crud'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'

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
  const values = [
    { label: 'Developer', value: game?.developer || '' },
    { label: 'Publisher', value: game.publisherId || '' },
    { label: 'Release Date', value: game.releaseDate || '' },
    { label: 'Platform', value: 'Windows' },
  ]
  const { uid } = useAppSelector(selectUser)

  return (
    <div>
      <div className='mt-6 aspect-w-16 aspect-h-9'>
        <img
          className='object-contain object-center w-full p-2'
          src={game.subImageUrl}
          alt=''
        />
      </div>

      <Badge badgeText='base game' classes='mt-4' />
      {/* <Price price={game.price} classes='mt-2' /> */}
      {game.purchased ? (
        <Link
          to='/library'
          className='flex justify-center block w-full mt-4 bg-blue-600 btn btn-xl'
        >
          In Library
        </Link>
      ) : (
        <>
          <button
            className='w-full mt-4 bg-blue-600 btn btn-xl'
            type='button'
            onClick={() =>
              updateUserGames({
                uid: uid || '',
                gameId: game.id,
                status: game.inCart ? 'REMOVED_FROM_CART' : 'IN_CART',
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
