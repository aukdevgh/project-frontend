import { FC, useState, useEffect, useCallback, MouseEvent } from 'react'
import { useNavigate, useParams } from 'react-router'

import { classNames } from '@shared/lib/classNames'
import { generateCategoryPath } from '@shared/lib/path'
import { Headling, Icon, Line, Button } from '@shared/ui'

import { CategoryList } from './CategoryList/CategoryList'
import { ColorList } from './ColorList/ColorList'
import cls from './Filters.module.scss'
import { PriceRange } from './PriceRange/PriceRange'
import { SizeList } from './SizeList/SizeList'
import { useGetMaxPrice } from '../model/selectors/getMaxPrice/getMaxPrice'
import { useGetMinPrice } from '../model/selectors/getMinPrice/getMinPrice'
import { useFiltersActions } from '../model/slice/filtersSlice'

interface FiltersProps {
  className?: string
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  const { catalog, category, subcategory } = useParams()
  const navigate = useNavigate()
  const { setRange, setCategory, setColors, setSizes, resetFilters } = useFiltersActions()
  const maxPrice = useGetMaxPrice()
  const minPrice = useGetMinPrice()

  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: minPrice, max: maxPrice })
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

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
        <Icon type="Filter" width={24} height={24} />
      </header>

      <Line />

      <CategoryList
        selectedCategory={selectedCategory}
        category={category}
        handleCategoryClick={handleSelectCategory}
      />

      <PriceRange onChangeRange={handlePriceRangeChange} maxPrice={maxPrice} minPrice={minPrice} />

      <Line />
      <ColorList selectedColors={selectedColors} handleColorClick={handleSelectColors} />
      <Line />
      <SizeList selectedSizes={selectedSizes} handleSizeClick={handleSelectSizes} />
      <Line />

      <Button onClick={handleApply}>Apply Filter</Button>
    </aside>
  )
}
