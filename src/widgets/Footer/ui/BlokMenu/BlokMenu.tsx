import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Option } from '@shared/types/select'
import { Headling, AppLink } from '@shared/ui'

import cls from './BlokMenu.module.scss'

interface BlokMenuProps {
  className?: string
  title: string
  routes: Option[]
}

export const BlokMenu: FC<BlokMenuProps> = ({ className, title, routes }) => {
  return (
    <div className={classNames(cls['blok-menu'], {}, [className])}>
      <Headling as="h3">{title}</Headling>

      <ul className={cls.links}>
        {routes.map((route) => (
          <li key={route.value}>
            <AppLink to={route.value}>{route.label}</AppLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
