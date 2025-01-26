import { FC, type MouseEvent } from 'react'

import { useGetSizesQuery } from '@features/Filters/hooks'

import { classNames } from '@shared/lib/classNames'
import { Collapse, Button } from '@shared/ui'

import cls from './SizeList.module.scss'

interface SizeListProps {
  className?: string
  selectedSizes: string[]
  handleSizeClick: (e: MouseEvent<HTMLUListElement>) => void
}

export const SizeList: FC<SizeListProps> = ({ className, selectedSizes, handleSizeClick }) => {
  const { data: sizes } = useGetSizesQuery()

  return (
    <Collapse className={className} title="Size">
      <ul className={cls.sizes} onClick={handleSizeClick}>
        {sizes?.map((size) => (
          <li key={size}>
            <Button
              className={classNames(cls.btn, { [cls.active]: selectedSizes.includes(size) }, [])}
              variant="secondary"
            >
              {size}
            </Button>
          </li>
        ))}
      </ul>
    </Collapse>
  )
}
