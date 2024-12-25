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
        <DropdownMenu.Content className={cls.content} align="start">
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className={cls.item}>Men</DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className={cls.content}>
                <DropdownMenu.Item className={cls.item}>shirts</DropdownMenu.Item>
                <DropdownMenu.Item className={cls.item}>shoes</DropdownMenu.Item>
                <DropdownMenu.Item className={cls.item}>watches</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className={cls.item}>Women</DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className={cls.content}>
                <DropdownMenu.Item className={cls.item}>bags</DropdownMenu.Item>
                <DropdownMenu.Item className={cls.item}>dresses</DropdownMenu.Item>
                <DropdownMenu.Item className={cls.item}>jewellery</DropdownMenu.Item>
                <DropdownMenu.Item className={cls.item}>shoes</DropdownMenu.Item>
                <DropdownMenu.Item className={cls.item}>watches</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Item className={cls.item}>beauty</DropdownMenu.Item>
          <DropdownMenu.Item className={cls.item}>sunglasses</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
