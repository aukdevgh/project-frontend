import { FC } from 'react'

import { Navbar } from '@features/Navbar'
import { Search } from '@features/Search'

import { getRouteMain } from '@shared/lib/routes'
import { Button } from '@shared/ui/Button'
import { Container } from '@shared/ui/Container'
import { Icon } from '@shared/ui/Icon'
import { AppLink } from '@shared/ui/Link'

import { Actions } from './Actions/Actions'
import cls from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header className={cls.header}>
      <Container className={cls.content}>
        <Button className={cls.burger} variant="clear">
          <Icon type="Search" width={24} height={24} />
        </Button>

        <AppLink className={cls.logo} to={getRouteMain()} variant="clear">
          <Icon type="Logo" width={160} height={22} />
        </AppLink>

        <Navbar className={cls.navbar} />

        <Search className={cls.search} />

        <Actions />
      </Container>
    </header>
  )
}
