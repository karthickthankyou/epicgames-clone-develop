import GameCard03 from '@molecules/GameCard03'

export interface IGameCard01SectionProps {
  heading: string
  buttonText?: string
}

const GameCard03Vertical = ({
  title,
  buttonText,
}: {
  title: string
  buttonText?: string
}) => (
  <div className='flex flex-col space-y-1'>
    <div className='flex justify-between mb-2'>
      {title}
      {buttonText && (
        <button
          type='button'
          className='text-xs uppercase border rounded-sm btn-md'
        >
          {buttonText}
        </button>
      )}
    </div>
    <GameCard03
      displayImage='static/media/game.e4f1f703.jpg'
      gameTitle='Cyber Punk'
      priceInfo={{
        price: 10,
      }}
    />
    <GameCard03
      displayImage='static/media/game.e4f1f703.jpg'
      gameTitle='Cyber Punk'
      priceInfo={{
        price: 10,
      }}
    />
    <GameCard03
      displayImage='static/media/game.e4f1f703.jpg'
      gameTitle='Cyber Punk'
      priceInfo={{
        price: 10,
      }}
    />
    <GameCard03
      displayImage='static/media/game.e4f1f703.jpg'
      gameTitle='Cyber Punk'
      priceInfo={{
        price: 10,
      }}
    />
    <GameCard03
      displayImage='static/media/game.e4f1f703.jpg'
      gameTitle='Cyber Punk'
      priceInfo={{
        price: 10,
      }}
    />
  </div>
)

const GameCard01Section = () => (
  <div className='grid grid-cols-3 gap-3'>
    <GameCard03Vertical title='New Releases' />
    <GameCard03Vertical title='Top Sellers' buttonText='view more' />
    <GameCard03Vertical title='Coming soon' />
  </div>
)

export default GameCard01Section
