import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom'
import Loading from '@molecules/Loading/Loading'
import {
  useBrowseGames,
  useGamesListener,
  useSpecialGames,
  useUserGameIdsListener,
  useUserGamesListener,
  useUserListener,
} from './firebase/hooks'

import { useAppSelector } from './store/hooks'
import {
  selectCartGames,
  selectPurchasedGames,
  selectWishlistGameIds,
} from './store/userGameSlice'

import { ReactComponent as Building } from './assets/svgs/Building.svg'
import { ReactComponent as Cart } from './assets/svgs/cart.svg'

import { useAlgoliaSearchGames } from './hooks'
// import News from './components/pages/News'
// import Community from './components/pages/Community'
// import CancelPayment from './components/pages/CancelPayment'
// import ForgotPassword from './components/pages/ForgotPassword'
// import UserPage from './components/pages/UserPage'
// import BrowseGames from './components/pages/BrowseGames'
// import Library from './components/pages/Library'
// import GamePage from './components/pages/GamePage'
// import Checkout from './components/pages/Checkout'
// import Signup from './components/pages/Signup'
// import Signin from './components/pages/Signin'
// import Wishlist from './components/pages/Wishlist'
// import NotFound from './components/pages/NotFound'
// import Navbar from './components/organisms/Navbar'
// import Footer from './components/organisms/Footer'

// Lazy loaded
const Navbar = React.lazy(
  () => import(/* webpackChunkName: "Navbar" */ './components/organisms/Navbar')
)
const Footer = React.lazy(
  () => import(/* webpackChunkName: "Footer" */ './components/organisms/Footer')
)
const News = React.lazy(
  () => import(/* webpackChunkName: "News" */ './components/pages/News')
)
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ './components/pages/NotFound')
)
const Wishlist = React.lazy(
  () => import(/* webpackChunkName: "Wishlist" */ './components/pages/Wishlist')
)
const GamePage = React.lazy(
  () => import(/* webpackChunkName: "GamePage" */ './components/pages/GamePage')
)
const Checkout = React.lazy(
  () => import(/* webpackChunkName: "Checkout" */ './components/pages/Checkout')
)
const Signup = React.lazy(
  () => import(/* webpackChunkName: "Signup" */ './components/pages/Signup')
)
const Signin = React.lazy(
  () => import(/* webpackChunkName: "Signin" */ './components/pages/Signin')
)
const Community = React.lazy(
  () =>
    import(/* webpackChunkName: "Community" */ './components/pages/Community')
)
const CancelPayment = React.lazy(
  () =>
    import(
      /* webpackChunkName: "CancelPayment" */ './components/pages/CancelPayment'
    )
)
const ForgotPassword = React.lazy(
  () =>
    import(
      /* webpackChunkName: "ForgotPassword" */ './components/pages/ForgotPassword'
    )
)
const UserPage = React.lazy(
  () => import(/* webpackChunkName: "UserPage" */ './components/pages/UserPage')
)
const Home = React.lazy(
  () => import(/* webpackChunkName: "Home" */ './components/pages/Home')
)
const BrowseGames = React.lazy(
  () =>
    import(
      /* webpackChunkName: "BrowseGames" */
      './components/pages/BrowseGames'
    )
)
const Library = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Library", webpackPrefetch: true */ './components/pages/Library'
    )
)

function App() {
  useUserListener()
  useUserGameIdsListener()
  useUserGamesListener()
  //   useSpecialGames()
  useGamesListener()
  useAlgoliaSearchGames()

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Navbar />
      </Suspense>
      <main className='container mx-auto thin-scrollbar'>
        <Switch>
          <Route exact path='/'>
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          </Route>
          <Route path='/also-wishlist'>
            <Redirect to='/wishlist' />
          </Route>
          <Route path='/wishlist'>
            <Suspense fallback={<Loading />}>
              <Wishlist />
            </Suspense>
          </Route>
          <Route path='/news'>
            <Suspense fallback={<Loading />}>
              <News />
            </Suspense>
          </Route>
          <Route path='/cancel'>
            <Suspense fallback={<Loading />}>
              <CancelPayment />
            </Suspense>
          </Route>
          <Route path='/community'>
            <Suspense fallback={<Loading />}>
              <Community />
            </Suspense>
          </Route>
          <Route path='/cart'>
            <Suspense fallback={<Loading />}>
              <Checkout />
            </Suspense>
          </Route>
          <Route path='/user/:uid'>
            <Suspense fallback={<Loading />}>
              <UserPage />
            </Suspense>
          </Route>
          <Route path='/success'>
            <Suspense fallback={<Loading />}>
              <Library />
            </Suspense>
          </Route>
          <Route path='/library'>
            <Suspense fallback={<Loading />}>
              <Library />
            </Suspense>
          </Route>
          <Route path='/forgotpassword'>
            <Suspense fallback={<Loading />}>
              <ForgotPassword />
            </Suspense>
          </Route>
          <Route path='/signin'>
            <Suspense fallback={<Loading />}>
              <Signin />
            </Suspense>
          </Route>
          <Route path='/signup'>
            <Suspense fallback={<Loading />}>
              <Signup />
            </Suspense>
          </Route>
          <Route path='/browse'>
            <Suspense fallback={<Loading />}>
              <BrowseGames />
            </Suspense>
          </Route>
          <Route path='/game/:id'>
            <Suspense fallback={<Loading />}>
              <GamePage />
            </Suspense>
          </Route>
          <Route path='*'>
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          </Route>
        </Switch>
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </main>
    </Router>
  )
}

export default App
