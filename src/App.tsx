import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import Wishlist from './components/pages/Wishlist'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import GamePage from './components/pages/GamePage'
import Checkout from './components/pages/Checkout'
import Signup from './components/pages/Signup'
import Signin from './components/pages/Signin'
import {
  useBrowseGames,
  useGamesListener,
  useUserGameIdsListener,
  useUserGamesListener,
  useUserListener,
} from './firebase/hooks'
import BrowseGames from './components/pages/BrowseGames'
import { useAppSelector } from './store/hooks'
import {
  selectCartGames,
  selectPurchasedGames,
  selectWishlistGameIds,
} from './store/userGameSlice'
import Library from './components/pages/Library'
import Footer from './components/organisms/Footer'

function App() {
  useUserListener()
  useUserGameIdsListener()
  useUserGamesListener()
  useGamesListener()
  useBrowseGames()

  const wishlistIds = useAppSelector(selectWishlistGameIds)
  const cart = useAppSelector(selectCartGames)
  const purchased = useAppSelector(selectPurchasedGames)
  return (
    <Router>
      <div className='container mx-auto'>
        <button
          type='button'
          onClick={() => {
            throw new Error()
          }}
        >
          Break the world
        </button>
        ;
        <ul className='flex overflow-x-scroll'>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/browse'>BrowseGames</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/wishlist'>Wishlist {wishlistIds.length}</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/cart'>Cart {cart.length}</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/library'>Library {purchased.length}</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/checkout'>Checkout</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/game/004'>Game Page</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/signin'>Sign In</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/also/will/not/match'>404</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/also-wishlist'>
            <Redirect to='/wishlist' />
          </Route>
          <Route path='/wishlist'>
            <Wishlist />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/library'>
            <Library />
          </Route>
          <Route path='/signin'>
            <Signin />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/browse'>
            <BrowseGames />
          </Route>
          <Route path='/game/:id'>
            <GamePage />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
