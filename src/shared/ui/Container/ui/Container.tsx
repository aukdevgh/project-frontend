import { FC, ReactNode } from 'react'

import { classNames } from '@shared/lib/classNames'

interface ContainerProps {
  className?: string
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={classNames('container', {}, [className])}>{children}</div>
}
