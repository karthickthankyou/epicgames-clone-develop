import React from 'react'
import SortDropdown from '../../atoms/SortDropdown'
import GameCard06 from '../../molecules/GameCard06'

export interface IWishlistProps {}

const Wishlist = () => (
  <div>
    <div className='flex items-center justify-between'>
      <SortDropdown
        sortByOptions={[
          'On Sale',
          'Recently Added',
          'Alphabetical',
          'Price: Low to High',
          'Price: High to Low',
        ]}
      />
      <div className='p-2'>Items (5)</div>
    </div>
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
      <GameCard06
        date='2021-06-10T08:30:00Z'
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyberpunk 2077'
        price={{
          discount: 10,
          price: 4.99,
        }}
        productionCompany='CD PROJEKT RED'
        review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
      />
      <GameCard06
        date='2021-06-10T08:30:00Z'
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyberpunk 2077'
        price={{
          discount: 10,
          price: 4.99,
        }}
        productionCompany='CD PROJEKT RED'
        review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
      />
      <GameCard06
        date='2021-06-10T08:30:00Z'
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyberpunk 2077'
        price={{
          discount: 10,
          price: 4.99,
        }}
        productionCompany='CD PROJEKT RED'
        review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
      />
      <GameCard06
        date='2021-06-10T08:30:00Z'
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyberpunk 2077'
        price={{
          discount: 10,
          price: 4.99,
        }}
        productionCompany='CD PROJEKT RED'
        review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
      />
      <GameCard06
        date='2021-06-10T08:30:00Z'
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyberpunk 2077'
        price={{
          discount: 10,
          price: 4.99,
        }}
        productionCompany='CD PROJEKT RED'
        review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
      />
    </div>
  </div>
)

export default Wishlist
