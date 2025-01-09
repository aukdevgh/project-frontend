import { FC } from 'react'

import { Navbar } from '@features/Navbar'
import { Search } from '@features/Search'

import { classNames } from '@shared/lib/classNames'
import { useMenu } from '@shared/lib/hooks/useMenu'
import { getRouteMain } from '@shared/lib/routes'
import { Button } from '@shared/ui/Button'
import { Container } from '@shared/ui/Container'
import { Icon } from '@shared/ui/Icon'
import { AppLink } from '@shared/ui/Link'
import { Menu } from '@shared/ui/Menu'

import { Actions } from './Actions/Actions'
import cls from './Header.module.scss'

export const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useMenu()

  return (
    <>
      <header className={classNames(cls.header, {}, ['header'])}>
        <Container className={cls.content}>
          <Button className={cls.burger} variant="clear" onClick={onOpen} aria-label="open burger menu">
            <Icon type="Burger" width={24} height={24} />
          </Button>

          <AppLink className={cls.logo} to={getRouteMain()} variant="clear" aria-label="shop.co">
            <Icon type="Logo" width={160} height={22} />
          </AppLink>

          <Navbar className={cls.navbar} />

          <Search className={cls.search} />

          <Actions />
        </Container>
      </header>
      <Menu isOpen={isOpen} onClose={onClose}>
        <Navbar className={cls['menu-navbar']} />
      </Menu>
    </>
  )
}
