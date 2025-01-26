import { memo } from 'react'

import { Collapse, RangeSlider } from '@shared/ui'

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
