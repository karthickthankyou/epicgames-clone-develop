import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
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
  useSpecialGames,
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
import UserPage from './components/pages/UserPage'

import { getImageUrl } from './utils'
import { useAlgoliaSearchGames } from './hooks'
import News from './components/pages/News'
import Community from './components/pages/Community'
import CancelPayment from './components/pages/CancelPayment'

function App() {
  useUserListener()
  useUserGameIdsListener()
  useUserGamesListener()
  //   useSpecialGames()
  useGamesListener()
  useAlgoliaSearchGames()

  return (
    <Router>
      <Navbar />
      <div className='container mx-auto'>
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
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/cancel'>
            <CancelPayment />
          </Route>
          <Route path='/community'>
            <Community />
          </Route>
          <Route path='/cart'>
            <Checkout />
          </Route>
          <Route path='/user/:uid'>
            <UserPage />
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
