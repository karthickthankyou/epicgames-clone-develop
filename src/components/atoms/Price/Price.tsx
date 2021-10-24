import { Game, PriceType } from 'src/types'
import { discountCalc, withCurrency } from 'src/utils/index'

const Price = ({
  price,
  discount,
  sections,
  comingSoon,
  classes,
}: PriceType) => {
  const CreatePrice = () => {
    if (comingSoon) return <>Coming Soon</>
    if (price === 0) return <>Free</>
    if (price && !discount) return withCurrency(price)

    return (
      <>
        <span
          className={`px-1 py-0.5 mr-2 ${
            sections?.includes('HIGHEST_DISCOUNT')
              ? 'bg-primary-600 text-white'
              : 'bg-green-700 text-white'
          }  rounded-sm`}
        >
          -{discount}%
        </span>
        <span className='mr-2 text-gray-400 line-through'>
          {withCurrency(price)}
        </span>
        <span className=''>{withCurrency(discountCalc(discount, price))}</span>
      </>
    )
  }

  return (
    <div className={`text-sm text-gray-200 ${classes}`}>{CreatePrice()}</div>
  )
}

export default Price
