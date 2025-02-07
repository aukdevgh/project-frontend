import { FC, ReactNode, useEffect, type MouseEvent } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

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
      className={classNames(cls.modal, { [cls.open]: isOpen, [cls.close]: !isOpen }, [className])}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
