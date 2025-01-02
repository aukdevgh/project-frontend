import ArrowDownIcon from '@shared/assets/icon/arrow-down.svg'
import ArrowRightIcon from '@shared/assets/icon/arrow-right.svg'
import BurgerIcon from '@shared/assets/icon/burger.svg'
import CartIcon from '@shared/assets/icon/cart.svg'
import CloseIcon from '@shared/assets/icon/close.svg'
import HalfStarIcon from '@shared/assets/icon/half-star.svg'
import ProfileIcon from '@shared/assets/icon/profile.svg'
import SearchIcon from '@shared/assets/icon/search.svg'
import LogoIcon from '@shared/assets/icon/SHOP.CO.svg'
import StarIcon from '@shared/assets/icon/star.svg'

export type IconType =
  | 'ArrowDown'
  | 'ArrowRight'
  | 'Close'
  | 'Search'
  | 'Cart'
  | 'Profile'
  | 'Logo'
  | 'Burger'
  | 'Star'
  | 'HalfStar'
export const iconTypes = new Map([
  ['ArrowDown', ArrowDownIcon],
  ['ArrowRight', ArrowRightIcon],
  ['Close', CloseIcon],
  ['Search', SearchIcon],
  ['Cart', CartIcon],
  ['Profile', ProfileIcon],
  ['Logo', LogoIcon],
  ['Burger', BurgerIcon],
  ['Star', StarIcon],
  ['HalfStar', HalfStarIcon],
])
