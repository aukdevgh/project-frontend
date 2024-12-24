import ArrowDownIcon from '@shared/assets/icon/arrow-down.svg'
import CartIcon from '@shared/assets/icon/cart.svg'
import CloseIcon from '@shared/assets/icon/close.svg'
import ProfileIcon from '@shared/assets/icon/profile.svg'
import SearchIcon from '@shared/assets/icon/search.svg'
import LogoIcon from '@shared/assets/icon/SHOP.CO.svg'

export type IconType = 'ArrowDown' | 'Close' | 'Search' | 'Cart' | 'Profile' | 'Logo'
export const iconTypes = new Map([
  ['ArrowDown', ArrowDownIcon],
  ['Close', CloseIcon],
  ['Search', SearchIcon],
  ['Cart', CartIcon],
  ['Profile', ProfileIcon],
  ['Logo', LogoIcon],
])
