import { FC } from 'react'

import { Search } from '@features/Search'

import { useGetCartItems } from '@entities/Cart'

import { useModal } from '@shared/hooks/useModal'
import { classNames } from '@shared/lib/classNames'
import { getRouteCart, getRouteProfile } from '@shared/lib/routes'
import { Button, Icon, AppLink, Modal, Card, Text } from '@shared/ui'

import cls from './Actions.module.scss'

interface ActionsProps {
  className?: string
}

export const Actions: FC<ActionsProps> = ({ className }) => {
  const { isOpen, onOpen, onClose } = useModal()
  const cartItems = useGetCartItems()

  return (
    <>
      <nav className={classNames('', {}, [className])}>
        <ul className={cls.actions}>
          <li className={cls['search-action']}>
            <Button variant="clear" onClick={onOpen} aria-label="open search menu">
              <Icon type="Search" width={24} height={24} />
            </Button>
          </li>
          <li className={cls.cart}>
            <AppLink to={getRouteCart()} variant="clear" aria-label="cart">
              <Icon type="Cart" width={24} height={24} />
            </AppLink>
            {cartItems.length > 0 && (
              <Text className={cls.count} weight="bold" size="xs" aria-label="cart items count">
                {cartItems.length}
              </Text>
            )}
          </li>
          <li>
            <AppLink to={getRouteProfile()} variant="clear" aria-label="profile">
              <Icon type="Profile" width={24} height={24} />
            </AppLink>
          </li>
        </ul>
      </nav>
      <Modal className={cls['search-menu']} isOpen={isOpen} onClose={onClose}>
        <Card className={cls['search-card']}>
          <div className={cls['search-header']}>
            <Search />
            <Button className={cls['close-btn']} aria-label="close burger menu" variant="clear" onClick={onClose}>
              <Icon type="Close" width={24} height={24} />
            </Button>
          </div>
        </Card>
      </Modal>
    </>
  )
}
