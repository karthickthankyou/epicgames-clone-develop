import { ReactComponent as HeartOutlineIcon } from '../assets/svgs/heart.svg'
import { ReactComponent as HeartSolidIcon } from '../assets/svgs/heartSolid.svg'
import { ReactComponent as CartOutlineIcon } from '../assets/svgs/cartOutline.svg'
import { ReactComponent as CartSolidIcon } from '../assets/svgs/cartSolid.svg'

export const getWishlisted = (wishlisted: boolean) =>
  wishlisted
    ? {
        WishlistIcon: HeartSolidIcon,
        wishlistHintText: 'Wishlisted',
      }
    : {
        WishlistIcon: HeartOutlineIcon,
        wishlistHintText: 'Add to wishlist',
      }
export const getInCart = (inCart: boolean) =>
  inCart
    ? {
        CartIcon: CartSolidIcon,
        cartHintText: 'In cart',
      }
    : {
        CartIcon: CartOutlineIcon,
        cartHintText: 'Add to cart',
      }
