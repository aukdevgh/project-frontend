import { FC, ReactNode, useEffect } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Button } from '@shared/ui/Button'
import { Icon } from '@shared/ui/Icon'

import cls from './Menu.module.scss'

interface MenuProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Menu: FC<MenuProps> = ({ className, children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className={classNames(cls.menu, { [cls.open]: isOpen, [cls.close]: !isOpen }, [className])}>
      <Button className={cls['close-btn']} aria-label="close burger menu" variant="clear" onClick={onClose}>
        <Icon type="Close" width={24} height={24} />
      </Button>
      <div className={cls.content}>{children}</div>
    </div>
  )
}
