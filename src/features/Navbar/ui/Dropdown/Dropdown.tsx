import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { FC } from 'react'

import { shopRoutes } from '@shared/constants/routes'
import { CategoryRoute, CategoryRouteCollection, Route } from '@shared/types/route'
import { Icon } from '@shared/ui/Icon/ui/Icon'
import { AppLink } from '@shared/ui/Link'

import cls from './Dropdown.module.scss'

const renderSubMenu = ({ category, subcategories }: CategoryRoute) => (
  <DropdownMenu.Sub key={category.path}>
    <DropdownMenu.SubTrigger className={cls.item}>
      <AppLink to={category.path}>{category.title}</AppLink>
    </DropdownMenu.SubTrigger>
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent className={cls.content}>
        {subcategories?.map((sub: Route) => (
          <DropdownMenu.Item key={sub.path} className={cls.item}>
            <AppLink to={sub.path}>{sub.title}</AppLink>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.SubContent>
    </DropdownMenu.Portal>
  </DropdownMenu.Sub>
)

const renderMenuItems = (routeItems: CategoryRouteCollection) =>
  Object.values(routeItems).map(({ category, subcategories }) =>
    subcategories ? (
      renderSubMenu({ category, subcategories })
    ) : (
      <DropdownMenu.Item key={category.path} className={cls.item}>
        <AppLink to={category.path}>{category.title}</AppLink>
      </DropdownMenu.Item>
    )
  )

export const Dropdown: FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={cls.trigger}>
        Shop
        <Icon type="ArrowDown" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={cls.content} align="start">
          {renderMenuItems(shopRoutes)}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
