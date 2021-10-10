import { useAppDispatch } from '../../store/hooks'
import {
  setActionGames,
  setAdventureGames,
  setHighestEverDiscounts,
  setHomeScreenGames,
  setNarrationGames,
  setPuzzleGames,
  setGamePage,
  setGamePageSimilarGames,
  setUnitsSold,
  setHoursPlayed,
  setAnticipatedBy,
  setHoursToBeat,
} from '../../store/gamesSlice'
import { setUser } from '../../store/user/userSlice'
import { setBrowseGames } from '../../store/browseGamesSlice'
import {
  setCartGames,
  setPurchasedGames,
  setWishlistedGames,
  setRemovedFromCartGames,
  setWishlistGameIds,
  setCartGameIds,
  setRemovedFromCartGameIds,
  setPurchasedGameIds,
} from '../../store/userGameSlice'

import { Game, LoadSuccessErrorDispatch, SimilarGame } from '../../types'

/**
 * @deprecated Use `useAlgoliaSearchGames()` instead for the browse games page.
 */
export function useBrowseGames() {
  console.log('mocked hook called')
  const dispatch = useAppDispatch()
  dispatch(setBrowseGames([]))
}
export function useUserGamesListener() {
  console.log('mocked hook called')
  const wishlistedGames: Game[] = [
    {
      price: 469,
      title: 'Chicory: A Colorful Tale',
      id: '004',
      tags: ['Action', 'Exploration', 'Adventure'],
      discount: 10,
      publisherId: 'finji',
      releaseDate: '2021-06-09T18:30:00.000Z',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F004.jpg?alt=media',
      subImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F004.jpg?alt=media',
    },
    {
      id: '011',
      discount: 60,
      title: 'Edge Of Eternity',
      publisherId: 'dear-villagers',
      price: 709,
      notes: ['HIGHEST_DISCOUNT'],
      releaseDate: '2021-06-07T18:30:00.000Z',
      tags: ['RPG', 'Strategy', 'OpenWorld'],
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F011.jpg?alt=media',
      subImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F011.jpg?alt=media',
    },
    {
      id: '019',
      discount: 50,
      title: 'Knockout City™',
      publisherId: 'electronic-arts',
      notes: ['HIGHEST_DISCOUNT'],
      price: 1499,
      tags: ['Action'],
      releaseDate: '2021-05-21T18:30:00.000Z',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F019.jpg?alt=media',
      subImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F019.jpg?alt=media',
    },
  ]
  const dispatch = useAppDispatch()
  dispatch(setCartGames([]))
  dispatch(setWishlistedGames(wishlistedGames))
  dispatch(setPurchasedGames([]))
  dispatch(setRemovedFromCartGames([]))
}

export function useUserGameIdsListener() {
  const dispatch = useAppDispatch()
  dispatch(setWishlistGameIds([]))
  dispatch(setCartGameIds([]))
  dispatch(setRemovedFromCartGameIds([]))
  dispatch(setPurchasedGameIds([]))
}

export function useGamesListener() {
  console.log('mocked hook called')
  const wishlistedGames: Game[] = [
    {
      price: 469,
      title: 'Chicory: A Colorful Tale',
      id: '004',
      tags: ['Action', 'Exploration', 'Adventure'],
      discount: 10,
      publisherId: 'finji',
      releaseDate: '2021-06-09T18:30:00.000Z',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F004.jpg?alt=media',
      subImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F004.jpg?alt=media',
    },
    {
      id: '011',
      discount: 60,
      title: 'Edge Of Eternity',
      publisherId: 'dear-villagers',
      price: 709,
      notes: ['HIGHEST_DISCOUNT'],
      releaseDate: '2021-06-07T18:30:00.000Z',
      tags: ['RPG', 'Strategy', 'OpenWorld'],
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F011.jpg?alt=media',
      subImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F011.jpg?alt=media',
    },
    {
      id: '019',
      discount: 50,
      title: 'Knockout City™',
      publisherId: 'electronic-arts',
      notes: ['HIGHEST_DISCOUNT'],
      price: 1499,
      tags: ['Action'],
      releaseDate: '2021-05-21T18:30:00.000Z',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F019.jpg?alt=media',
      subImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F019.jpg?alt=media',
    },
  ]
  const dispatch = useAppDispatch()
  dispatch(setHighestEverDiscounts(wishlistedGames))
  dispatch(setHomeScreenGames([]))
}

export const useHomeScreenGames = () => {
  console.log('mocked hook called')
  const dispatch = useAppDispatch()
  dispatch(setActionGames([]))
  dispatch(setAdventureGames([]))
  dispatch(setPuzzleGames([]))
  dispatch(setNarrationGames([]))
}

export function useSpecialGames() {
  console.log('mocked hook called')
  const dispatch = useAppDispatch()
  dispatch(setUnitsSold([]))
  dispatch(setHoursPlayed([]))
  dispatch(setHoursToBeat([]))
  dispatch(setAnticipatedBy([]))
}

export const useSimilarGames = (gameIds: SimilarGame[] | undefined) => {
  const dispatch = useAppDispatch()
  dispatch(setGamePageSimilarGames([]))
}

export const useGetGamePage = (gameId: string) => {
  const dispatch = useAppDispatch()
  dispatch(setGamePage(null))
}

export const callSignIn = (
  { email, password }: { email: string; password: string },
  dispatch: LoadSuccessErrorDispatch
) => {
  dispatch('success')
}
export const callSignup = (
  {
    email,
    password,
    displayName,
  }: {
    email: string
    password: string
    displayName?: string
  },
  dispatch: LoadSuccessErrorDispatch
) => {
  dispatch('success')
}

export const callSignOut = () => {
  console.log('Logged out')
}

export const googleSignin = () => {
  console.log('google signin')
}

export const passwordReset = ({ email }: { email: string }) => {
  console.log('passwordReset')
}

export const sendResetPasswordLink = (
  email: string,
  dispatch: LoadSuccessErrorDispatch
) => {
  console.log('passwordReset')
}
