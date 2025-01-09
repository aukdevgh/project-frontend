import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Routes } from '@shared/types/route'
import { Headling } from '@shared/ui/Headling'
import { AppLink } from '@shared/ui/Link'

import cls from './BlokMenu.module.scss'

interface BlokMenuProps {
  className?: string
  title: string
  routes: Routes
}

export const BlokMenu: FC<BlokMenuProps> = ({ className, title, routes }) => {
  return (
    <div className={classNames(cls['blok-menu'], {}, [className])}>
      <Headling as="h3">{title}</Headling>

      <ul className={cls.links}>
        {routes.map((route) => (
          <li key={route.path}>
            <AppLink to={route.path}>{route.title}</AppLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
