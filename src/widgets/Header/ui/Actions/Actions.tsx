import { FC } from 'react'

import { Search } from '@features/Search'

import { classNames } from '@shared/lib/classNames'
import { useMenu } from '@shared/lib/hooks/useMenu'
import { getRouteCart, getRouteProfile } from '@shared/lib/routes'
import { Button } from '@shared/ui/Button'
import { Icon } from '@shared/ui/Icon'
import { AppLink } from '@shared/ui/Link'
import { Menu } from '@shared/ui/Menu'

import cls from './Actions.module.scss'

interface ActionsProps {
  className?: string
}

export const Actions: FC<ActionsProps> = ({ className }) => {
  const { isOpen, onOpen, onClose } = useMenu()

  return (
    <>
      <nav className={classNames('', {}, [className])}>
        <ul className={cls.actions}>
          <li className={cls['search-action']}>
            <Button variant="clear" onClick={onOpen} aria-label="open search menu">
              <Icon type="Search" width={24} height={24} />
            </Button>
          </li>
          <li>
            <AppLink to={getRouteCart()} variant="clear" aria-label="cart">
              <Icon type="Cart" width={24} height={24} />
            </AppLink>
          </li>
          <li>
            <AppLink to={getRouteProfile()} variant="clear" aria-label="profile">
              <Icon type="Profile" width={24} height={24} />
            </AppLink>
          </li>
        </ul>
      </nav>
      <Menu className={cls['search-menu']} isOpen={isOpen} onClose={onClose}>
        <Search />
      </Menu>
    </>
  )
}
