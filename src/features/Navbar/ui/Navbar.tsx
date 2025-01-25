import { FC, useState } from 'react'
import { useNavigate } from 'react-router'

import { navbarRoutes, shopRoutes } from '@shared/constants/routes'
import { classNames } from '@shared/lib/classNames'
import { AppLink } from '@shared/ui/Link'
import { Select } from '@shared/ui/Select'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(shopRoutes[0].value)
  const handleChange = (value: string) => {
    navigate(value)
    setSelected(value)
  }
  return (
    <nav className={classNames('', {}, [className])}>
      <ul className={cls.list}>
        <li>
          <Select options={shopRoutes} value={selected} onChange={handleChange} />
        </li>
        {navbarRoutes.map((link) => (
          <li key={link.value}>
            <AppLink to={link.value}>{link.label}</AppLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
