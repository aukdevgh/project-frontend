import { FC, useState, useEffect, useCallback, MouseEvent } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate, useParams } from 'react-router'

import { classNames } from '@shared/lib/classNames'
import { generateCategoryPath } from '@shared/lib/path'
import { Headling, Icon, Line, Button, Collapse, SizeList, ColorList, RangeSlider } from '@shared/ui'

import { CategoryList } from './CategoryList/CategoryList'
import cls from './Filters.module.scss'
import { useGetColorsQuery, useGetSizesQuery } from '../api/filterApi'
import { useGetMaxPrice } from '../model/selectors/getMaxPrice/getMaxPrice'
import { useGetMinPrice } from '../model/selectors/getMinPrice/getMinPrice'
import { useGetSelectedPriceRange } from '../model/selectors/getSelectedPriceRange/getSelectedPriceRange'
import { useFiltersActions } from '../model/slice/filtersSlice'

interface FiltersProps {
  className?: string
  onClose?: () => void
}

const STEP = 1

export const Filters: FC<FiltersProps> = ({ className, onClose }) => {
  const isTablet = useMediaQuery({ maxWidth: 1024 })
  const navigate = useNavigate()
  const { catalog, category, subcategory } = useParams()
  const { setRange, setCategory, setColors, setSizes, resetFilters } = useFiltersActions()

  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const maxPrice = useGetMaxPrice()
  const minPrice = useGetMinPrice()
  const priceRange = useGetSelectedPriceRange()
  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: minPrice, max: maxPrice })

  const { data: sizes } = useGetSizesQuery()
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

  const { data: colors } = useGetColorsQuery()
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const handleSelectSizes = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement
    const size = target.innerText
    setSelectedSizes((sizes) => (sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size]))
  }
  const handleSelectColors = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const handlePriceRangeChange = useCallback((value: { min: number; max: number }) => {
    setSelectedPriceRange(value)
  }, [])

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category)
  }

  const handleApply = () => {
    setRange({
      min: Number(selectedPriceRange.min),
      max: Number(selectedPriceRange.max),
    })
    setCategory(selectedCategory)
    setColors(selectedColors)
    setSizes(selectedSizes)
    navigate(generateCategoryPath(selectedCategory, catalog))

    if (onClose) {
      onClose()
    }
  }

  useEffect(() => {
    setCategory(subcategory || category || undefined)
  }, [category, subcategory, setCategory])

  useEffect(() => {
    if (!category) {
      resetFilters()
      setSelectedPriceRange({ min: minPrice, max: maxPrice })
      setSelectedCategory('')
      setSelectedColors([])
      setSelectedSizes([])
    }
  }, [catalog, category, resetFilters, minPrice, maxPrice])

  return (
    <aside className={classNames(cls.filters, {}, [className])}>
      <header className={cls['filter-header']}>
        <Headling as="h2" transform="capitalize">
          Filter
        </Headling>
        {isTablet ? (
          <Button className={cls['close-btn']} aria-label="close burger menu" variant="clear" onClick={onClose}>
            <Icon type="Close" width={24} height={24} />
          </Button>
        ) : (
          <Icon type="Filter" width={24} height={24} />
        )}
      </header>

      <Line />

      <CategoryList
        selectedCategory={selectedCategory}
        category={category}
        handleCategoryClick={handleSelectCategory}
      />

      <Collapse className={className} title="Price">
        <RangeSlider
          isShowTooltip={true}
          max={maxPrice}
          min={minPrice}
          onChange={handlePriceRangeChange}
          step={STEP}
          value={priceRange}
        />
      </Collapse>

      <Line />

      <Collapse className={className} title="Colors">
        <ColorList colors={colors} selectedColors={selectedColors} handleColorClick={handleSelectColors} />
      </Collapse>

      <Line />

      <Collapse className={className} title="Size">
        <SizeList sizes={sizes} selectedSizes={selectedSizes} handleSizeClick={handleSelectSizes} />
      </Collapse>

      <Line />

      <Button onClick={handleApply}>Apply Filter</Button>
    </aside>
  )
}
