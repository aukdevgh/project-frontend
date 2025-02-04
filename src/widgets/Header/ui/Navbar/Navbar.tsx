import { FC, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'

import { navbarRoutes, shopRoutes } from '@shared/constants/routes'
import { classNames } from '@shared/lib/classNames'
import { Select, AppLink } from '@shared/ui'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
  onClose?: () => void
}

export const Navbar: FC<NavbarProps> = ({ className, onClose }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const navigate = useNavigate()
  const [selected, setSelected] = useState(shopRoutes[0].value)

  const handleChange = (value: string) => {
    navigate(value)
    setSelected(value)
  }
  return (
    <nav className={classNames('', {}, [className])}>
      <ul className={cls.list} onClick={onClose}>
        {isMobile ? (
          shopRoutes.map((link) => (
            <li key={link.value}>
              <AppLink className={cls.link} to={link.value}>
                {link.label}
              </AppLink>
            </li>
          ))
        ) : (
          <li>
            <Select options={shopRoutes} value={selected} onChange={handleChange} />
          </li>
        )}
        {navbarRoutes.map((link) => (
          <li key={link.value}>
            <AppLink className={cls.link} to={link.value}>
              {link.label}
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
