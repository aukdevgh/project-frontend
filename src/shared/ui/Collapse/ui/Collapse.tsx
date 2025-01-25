import { FC, ReactNode, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Button } from '@shared/ui/Button'
import { Headling } from '@shared/ui/Headling'
import { Icon } from '@shared/ui/Icon'

import cls from './Collapse.module.scss'

interface CollapseProps {
  className?: string
  title: string
  children: ReactNode
}

export const Collapse: FC<CollapseProps> = ({ className, title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className={classNames(cls['collapse-wrapper'], {}, [className])}>
      <Button className={cls.header} onClick={toggleCollapse} variant="clear" size="icon">
        <Headling transform="capitalize">{title}</Headling>
        <Icon className={classNames('', { [cls.collapsed]: !isCollapsed })} type="ArrowDown" />
      </Button>

      {!isCollapsed && children}
    </div>
  )
}
