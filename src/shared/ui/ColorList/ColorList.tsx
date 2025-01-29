import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './ColorList.module.scss'
import { Checkbox } from '../Checkbox/Checkbox'

interface ColorListProps {
  className?: string
  colors?: string[]
  selectedColors: string[]
  handleColorClick: (color: string) => void
}

export const ColorList: FC<ColorListProps> = ({ className, colors = [], selectedColors, handleColorClick }) => {
  return (
    <ul className={classNames(cls.list, {}, [className])}>
      {colors?.map((color) => (
        <li className={cls.item} key={color}>
          <Checkbox
            label={
              <>
                <span className={cls.color} style={{ backgroundColor: color }}></span>
                {color}
              </>
            }
            onChange={() => handleColorClick(color)}
            checked={selectedColors.includes(color)}
          />
        </li>
      ))}
    </ul>
  )
}
