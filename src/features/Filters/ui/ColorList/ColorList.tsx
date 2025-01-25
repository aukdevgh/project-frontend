import { FC } from 'react'

import { useGetColorsQuery } from '@features/Filters/hooks'

import { Checkbox } from '@shared/ui/Checkbox'
import { Collapse } from '@shared/ui/Collapse'

import cls from './ColorList.module.scss'

interface ColorListProps {
  className?: string
  selectedColors: string[]
  handleColorClick: (color: string) => void
}

export const ColorList: FC<ColorListProps> = ({ className, selectedColors, handleColorClick }) => {
  const { data: colors } = useGetColorsQuery()

  return (
    <Collapse className={className} title="Colors">
      <ul className={cls.list}>
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
    </Collapse>
  )
}
