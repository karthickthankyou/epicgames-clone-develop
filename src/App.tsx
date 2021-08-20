import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
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
import Navbar from './components/organisms/Navbar'
import ForgotPassword from './components/pages/ForgotPassword'

function App() {
  useUserListener()
  //   useUserGameIdsListener()
  //   useUserGamesListener()
  //   useGamesListener()
  //   useBrowseGames()

  return (
    <Router>
      <div className='container mx-auto'>
        <Navbar />
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
          <Route path='/forgotpassword'>
            <ForgotPassword />
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
