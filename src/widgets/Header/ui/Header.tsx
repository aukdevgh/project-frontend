import { FC } from 'react'

import { Search } from '@features/Search'

import { useModal } from '@shared/hooks/useModal'
import { classNames } from '@shared/lib/classNames'
import { getRouteHome } from '@shared/lib/routes'
import { Container, Button, Icon, AppLink, Modal, Card, Headling } from '@shared/ui'

import { Actions } from './Actions/Actions'
import cls from './Header.module.scss'
import { Navbar } from './Navbar/Navbar'

export const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useModal()

  return (
    <>
      <header className={classNames(cls.header, {}, ['header'])}>
        <Container className={cls.content}>
          <Button className={cls.burger} variant="clear" onClick={onOpen} aria-label="open burger menu">
            <Icon type="Burger" width={24} height={24} />
          </Button>

          <AppLink className={cls.logo} to={getRouteHome()} variant="clear" aria-label="shop.co">
            <Icon type="Logo" width={'100%'} height={22} />
          </AppLink>

          <Navbar className={cls.navbar} />

          <Search className={cls.search} />

          <Actions />
        </Container>
      </header>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Card className={cls['menu-card']}>
          <div className={cls['menu-header']}>
            <Headling>Catalogs</Headling>
            <Button className={cls['close-btn']} aria-label="close burger menu" variant="clear" onClick={onClose}>
              <Icon type="Close" width={24} height={24} />
            </Button>
          </div>
          <Navbar className={cls['menu-navbar']} onClose={onClose} />
        </Card>
      </Modal>
    </>
  )
}
