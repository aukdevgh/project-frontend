import { memo } from 'react'

import { Collapse } from '@shared/ui/Collapse'
import { RangeSlider } from '@shared/ui/RangeSlider'

import { useGetSelectedPriceRange } from '../../model/selectors/getSelectedPriceRange/getSelectedPriceRange'

interface PriceRangeProps {
  className?: string
  onChangeRange: (value: { min: number; max: number }) => void
  maxPrice: number
  minPrice: number
}

const STEP = 1

export const PriceRange = memo(({ className, onChangeRange, maxPrice, minPrice }: PriceRangeProps) => {
  const priceRange = useGetSelectedPriceRange()

  return (
    <Collapse className={className} title="Price">
      <RangeSlider
        isShowTooltip={true}
        max={maxPrice}
        min={minPrice}
        onChange={onChangeRange}
        step={STEP}
        value={priceRange}
      />
    </Collapse>
  )
})
