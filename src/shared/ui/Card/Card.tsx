import { FC, ReactNode } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Card.module.scss'

interface CardProps {
  className?: string
  children: ReactNode
}

export const Card: FC<CardProps> = ({ className, children }) => {
  return <div className={classNames(cls.card, {}, [className])}>{children}</div>
}
