import { FC } from 'react'

import { classNames } from '@shared/lib/classNames/classNames'
import { Icon } from '@shared/ui/Icon'
import { Input } from '@shared/ui/Input'

import cls from './Search.module.scss'

interface SearchProps {
  className?: string
}

export const Search: FC<SearchProps> = ({ className }) => {
  //TODO search result list
  return (
    <div className={classNames(cls.search, {}, [className])}>
      <Input
        className={cls.search}
        addon={<Icon type="Search" width={24} height={24} />}
        placeholder="Search for products..."
      />
    </div>
  )
}
