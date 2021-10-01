import GameCard02 from '../../molecules/GameCard02'

export interface IGameCard02SectionProps {}

const GameCard02Section = () => (
  <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
    <GameCard02
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur molestiae voluptatem, exercitationem consequatur quibusdam placeat tempore dolore ex aliquid tempora perspiciatis deleniti soluta ipsam.'
      displayImage='static/media/game.e4f1f703.jpg'
      gameTitle='Battleground 2009'
      priceInfo={{
        price: 10,
      }}
      productionCompany='Some company'
    />
    <GameCard02
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur molestiae voluptatem, exercitationem consequatur quibusdam placeat tempore dolore ex aliquid tempora perspiciatis deleniti soluta ipsam.'
      displayImage='static/media/game.e4f1f703.jpg'
      gameTitle='Battleground 2009'
      priceInfo={{
        price: 10,
      }}
      productionCompany='Some company'
    />
    <GameCard02
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur molestiae voluptatem, exercitationem consequatur quibusdam placeat tempore dolore ex aliquid tempora perspiciatis deleniti soluta ipsam.'
      displayImage='static/media/game.e4f1f703.jpg'
      gameTitle='Battleground 2009'
      priceInfo={{
        price: 10,
      }}
      productionCompany='Some company'
      classes='col-span-1 sm:col-span-2 md:col-span-1'
    />
  </div>
)

export default GameCard02Section
