import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { FC } from 'react'

import { Icon } from '@shared/ui/Icon/ui/Icon'

import cls from './Dropdown.module.scss'

export const Dropdown: FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={cls.trigger}>
        Shop
        <Icon type="ArrowDown" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={cls.content}>
          <DropdownMenu.Item className={cls.item}>Men</DropdownMenu.Item>
          <DropdownMenu.Item className={cls.item}>Women</DropdownMenu.Item>
          <DropdownMenu.Item className={cls.item}>beauty</DropdownMenu.Item>
          <DropdownMenu.Item className={cls.item}>sunglasses</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
