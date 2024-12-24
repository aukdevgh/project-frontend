import { FC } from 'react'

import { classNames } from '@shared/lib/classNames/classNames'
import { Button } from '@shared/ui/Button'
import { Icon } from '@shared/ui/Icon'
import { AppLink } from '@shared/ui/Link'

import cls from './Actions.module.scss'

interface ActionsProps {
  className?: string
}

export const Actions: FC<ActionsProps> = ({ className }) => {
  return (
    <nav className={classNames('', {}, [className])}>
      <ul className={cls.actions}>
        <li className={cls['seart-action']}>
          <Button variant="clear">
            <Icon type="Search" width={24} height={24} />
          </Button>
        </li>
        <li>
          <AppLink to={'/'} variant="clear">
            <Icon type="Cart" width={24} height={24} />
          </AppLink>
        </li>
        <li>
          <AppLink to={'/'} variant="clear">
            <Icon type="Profile" width={24} height={24} />
          </AppLink>
        </li>
      </ul>
    </nav>
  )
}
