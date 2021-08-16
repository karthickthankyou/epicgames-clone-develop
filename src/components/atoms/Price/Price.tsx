import { GameNotes } from '../../../types'
import { discountCalc, withCurrency } from '../../../utils'

export interface IPriceProps {
  price: number
  discount?: number
  classes?: string
  notes?: GameNotes[]
  comingSoon?: boolean
}

const Discounted = ({ discount, price, notes }: IPriceProps) => (
  <>
    <span
      className={`px-1 py-0.5 mr-2 ${
        notes?.includes('HIGHEST_DISCOUNT') ? 'bg-green-700' : 'bg-blue-700'
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

const Price = ({
  price,
  discount,
  comingSoon,
  notes,
  classes,
}: IPriceProps) => {
  const CreatePrice = () => {
    if (comingSoon) return <>Coming Soon</>
    if (price === 0) return <div>Free</div>

    if (price) {
      if (discount)
        return <Discounted discount={discount} price={price} notes={notes} />
      return withCurrency(price)
    }

    throw new Error(
      'Unknown combination of values received in Price component.'
    )
  }

  return (
    <div className={`text-sm text-gray-200 ${classes}`}>{CreatePrice()}</div>
  )
}

export default Price
