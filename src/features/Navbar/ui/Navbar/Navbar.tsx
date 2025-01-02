import { FC } from 'react'

import { navbarRoutes } from '@shared/constants/routes'
import { classNames } from '@shared/lib/classNames'
import { AppLink } from '@shared/ui/Link'

import cls from './Navbar.module.scss'
import { Dropdown } from '../Dropdown/Dropdown'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classNames('', {}, [className])}>
      <ul className={cls.list}>
        <li>
          <Dropdown />
        </li>
        {navbarRoutes.map((link) => (
          <li key={link.path}>
            <AppLink to={link.path}>{link.title}</AppLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
