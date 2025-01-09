import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Line.module.scss'

interface LineProps {
  className?: string
}

export const Line: FC<LineProps> = ({ className }) => {
  return <hr className={classNames(cls.line, {}, [className])} />
}
