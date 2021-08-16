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
  useUserGameIdsListener,
  useUserGamesListener,
  useUserListener,
} from './firebase/hooks'
import BrowseGames from './components/pages/BrowseGames'

function App() {
  useUserListener()
  useUserGameIdsListener()
  useUserGamesListener()

  return (
    <Router>
      <div className='container mx-auto'>
        <ul className='flex'>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/browse'>BrowseGames</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/wishlist'>Wishlist</Link>
          </li>
          <li className='p-1 m-1 bg-gray-800 rounded'>
            <Link to='/cart'>Cart</Link>
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
      </div>
    </Router>
  )
}

export default App
