import { FC, type MouseEvent } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './SizeList.module.scss'
import { Button } from '../Button/Button'

interface SizeListProps {
  className?: string
  selectedSize?: string
  selectedSizes?: string[]
  sizes?: string[]
  handleSizeClick: (e: MouseEvent<HTMLUListElement>) => void
}

export const SizeList: FC<SizeListProps> = ({
  className,
  sizes = [],
  selectedSize,
  selectedSizes,
  handleSizeClick,
}) => {
  return (
    <ul className={classNames(cls.sizes, {}, [className])} onClick={handleSizeClick}>
      {sizes.map((size) => (
        <li key={size}>
          <Button
            className={cls.btn}
            variant="outline"
            isActive={selectedSize ? selectedSize === size : selectedSizes?.includes(size)}
            aria-selected={selectedSize ? selectedSize === size : selectedSizes?.includes(size)}
            aria-label={`Select size ${size}`}
          >
            {size}
          </Button>
        </li>
      ))}
    </ul>
  )
}
