import GameCard01 from '../../molecules/GameCard01'

export interface IGameCard01SectionProps {
  heading: string
  buttonText: string
}

const GameCard01Section = ({
  heading,
  buttonText,
}: IGameCard01SectionProps) => (
  <div>
    <div className='flex justify-between'>
      <div>{heading}</div>
      <button
        type='button'
        className='text-xs uppercase border border-white rounded-md btn-md '
      >
        {buttonText}
      </button>
    </div>
    <div className='grid grid-cols-2 gap-3 mt-3 md:grid-cols-3 lg:grid-cols-6'>
      <GameCard01
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyber Punk'
        inCart
        priceInfo={{
          price: 10,
        }}
        productionCompany='Some production company'
        wishlisted
      />
      <GameCard01
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyber Punk'
        inCart
        priceInfo={{
          price: 10,
        }}
        productionCompany='Some production company'
        wishlisted
      />
      <GameCard01
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyber Punk'
        inCart
        priceInfo={{
          price: 10,
        }}
        productionCompany='Some production company'
        wishlisted
      />
      <GameCard01
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyber Punk'
        inCart
        priceInfo={{
          price: 10,
        }}
        productionCompany='Some production company'
        wishlisted
      />
      <GameCard01
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyber Punk'
        inCart
        priceInfo={{
          price: 10,
        }}
        productionCompany='Some production company'
        wishlisted
      />
      <GameCard01
        displayImage='static/media/game.e4f1f703.jpg'
        gameTitle='Cyber Punk'
        inCart
        priceInfo={{
          price: 10,
        }}
        productionCompany='Some production company'
        wishlisted
      />
    </div>
  </div>
)

export default GameCard01Section
