import GameCard02 from '@molecules/GameCard02'

export interface IGameCard02SectionProps {}

const GameCard02Section = () => (
  <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
    <GameCard02
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur molestiae voluptatem, exercitationem consequatur quibusdam placeat tempore dolore ex aliquid tempora perspiciatis deleniti soluta ipsam.'
      imageUrl='static/media/game.e4f1f703.jpg'
      title='Battleground 2009'
      price={10}
    />
    <GameCard02
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur molestiae voluptatem, exercitationem consequatur quibusdam placeat tempore dolore ex aliquid tempora perspiciatis deleniti soluta ipsam.'
      imageUrl='static/media/game.e4f1f703.jpg'
      title='Battleground 2009'
      price={10}
    />
    <GameCard02
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur molestiae voluptatem, exercitationem consequatur quibusdam placeat tempore dolore ex aliquid tempora perspiciatis deleniti soluta ipsam.'
      imageUrl='static/media/game.e4f1f703.jpg'
      title='Battleground 2009'
      price={10}
      classes='col-span-1 sm:col-span-2 md:col-span-1'
    />
  </div>
)

export default GameCard02Section
