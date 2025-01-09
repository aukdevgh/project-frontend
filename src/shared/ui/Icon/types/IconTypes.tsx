import ArrowDownIcon from '@shared/assets/icon/arrow-down.svg'
import ArrowLeftIcon from '@shared/assets/icon/arrow-left.svg'
import ArrowRightIcon from '@shared/assets/icon/arrow-right.svg'
import BurgerIcon from '@shared/assets/icon/burger.svg'
import CalvinKleinIcon from '@shared/assets/icon/calvinKlein.svg'
import CartIcon from '@shared/assets/icon/cart.svg'
import CloseIcon from '@shared/assets/icon/close.svg'
import DiamondIcon from '@shared/assets/icon/diamond.svg'
import EmailIcon from '@shared/assets/icon/email.svg'
import FacebookIcon from '@shared/assets/icon/facebook.svg'
import GithubIcon from '@shared/assets/icon/github.svg'
import GucciIcon from '@shared/assets/icon/gucci.svg'
import HalfStarIcon from '@shared/assets/icon/half-star.svg'
import InstagramIcon from '@shared/assets/icon/instagram.svg'
import PradaIcon from '@shared/assets/icon/prada.svg'
import ProfileIcon from '@shared/assets/icon/profile.svg'
import SearchIcon from '@shared/assets/icon/search.svg'
import LogoIcon from '@shared/assets/icon/SHOP.CO.svg'
import StarIcon from '@shared/assets/icon/star.svg'
import VersaceIcon from '@shared/assets/icon/versace.svg'
import XCOMIcon from '@shared/assets/icon/x.com.svg'
import ZaraIcon from '@shared/assets/icon/zara.svg'

export type IconType =
  | 'ArrowDown'
  | 'ArrowRight'
  | 'ArrowLeft'
  | 'Close'
  | 'Search'
  | 'Cart'
  | 'Profile'
  | 'Logo'
  | 'Burger'
  | 'Star'
  | 'HalfStar'
  | 'Diamond'
  | 'Versace'
  | 'Zara'
  | 'Gucci'
  | 'CalvinKlein'
  | 'Prada'
  | 'XCOM'
  | 'Facebook'
  | 'Instagram'
  | 'Github'
  | 'Email'

export const iconTypes = new Map([
  ['ArrowDown', ArrowDownIcon],
  ['ArrowRight', ArrowRightIcon],
  ['ArrowLeft', ArrowLeftIcon],
  ['Close', CloseIcon],
  ['Search', SearchIcon],
  ['Cart', CartIcon],
  ['Profile', ProfileIcon],
  ['Logo', LogoIcon],
  ['Burger', BurgerIcon],
  ['Star', StarIcon],
  ['HalfStar', HalfStarIcon],
  ['Diamond', DiamondIcon],
  ['Versace', VersaceIcon],
  ['Zara', ZaraIcon],
  ['Gucci', GucciIcon],
  ['CalvinKlein', CalvinKleinIcon],
  ['Prada', PradaIcon],
  ['XCOM', XCOMIcon],
  ['Facebook', FacebookIcon],
  ['Instagram', InstagramIcon],
  ['Github', GithubIcon],
  ['Email', EmailIcon],
])
