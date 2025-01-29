import { FC, ReactNode, useEffect, type MouseEvent } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Menu.module.scss'

interface MenuProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Menu: FC<MenuProps> = ({ className, children, isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    window.scrollTo(0, 0)

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && onClose) {
      onClose()
    }
  }

  return (
    <div
      className={classNames(cls.menu, { [cls.open]: isOpen, [cls.close]: !isOpen }, [className])}
      onClick={handleClick}
    >
      <div className={cls.content}>{children}</div>
    </div>
  )
}
