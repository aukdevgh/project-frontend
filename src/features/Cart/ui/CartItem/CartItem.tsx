import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { generateCategoryPath } from '@shared/lib/path'
import { AppImage, AppLink, Button, Headling, Icon, Text } from '@shared/ui'

import cls from './CartItem.module.scss'

import type { CartItem as CartItemType } from '../../model/types/cartSchema'

interface CartItemProps {
  className?: string
  item: CartItemType
  increaseQuantity: (item: CartItemType) => void
  decreaseQuantity: (item: CartItemType) => void
  removeItem: (item: CartItemType) => void
}

export const CartItem: FC<CartItemProps> = ({ className, item, decreaseQuantity, increaseQuantity, removeItem }) => {
  return (
    <div className={classNames(cls['cart-item'], {}, [className])}>
      <AppImage className={cls.img} src={item.image} alt={item.name} width={124} height={124} />
      <div className={cls.inner}>
        <div className={cls.info}>
          <Headling as="h3" transform="capitalize">
            <AppLink to={`/${generateCategoryPath(item.category)}/${item.id}`}>{item.name}</AppLink>
          </Headling>
          <Text>Size: {item.size}</Text>
          <Text>Color: {item.color}</Text>
          <Text className={cls.price} size="l" weight="bold">
            {item.price}
          </Text>
        </div>
        <div className={cls.actions}>
          <Button onClick={() => removeItem(item)} variant="danger" size="icon" aria-label="remove item">
            <Icon type="Delete" width={24} height={24} />
          </Button>

          <div className={cls.quantity}>
            <Button onClick={() => decreaseQuantity(item)} variant="ghost" size="icon" aria-label="Decrease quantity">
              <Icon type="Minus" width={24} height={24} />
            </Button>
            <Text>{item.quantity}</Text>
            <Button onClick={() => increaseQuantity(item)} variant="ghost" size="icon" aria-label="Increase quantity">
              <Icon type="Plus" width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
