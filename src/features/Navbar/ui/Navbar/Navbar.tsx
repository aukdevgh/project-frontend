import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { AppLink } from '@shared/ui/Link'

import cls from './Navbar.module.scss'
import { NAV_LINKS } from '../../const/links'
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
        {NAV_LINKS.map((link) => (
          <li key={link.path}>
            <AppLink to={link.path}>{link.name}</AppLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
