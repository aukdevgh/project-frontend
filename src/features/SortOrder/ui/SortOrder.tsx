import { FC, useEffect } from 'react'
import { useParams } from 'react-router'

import { classNames } from '@shared/lib/classNames'
import { Select } from '@shared/ui'

import cls from './SortOrder.module.scss'
import { SORT_OPTIONS, SORT_ORDER_MAP } from '../consts/consts'
import { useGetSortOrder } from '../model/selectors/getSortOrder/getSortOrder'
import { useSortOrderActions } from '../model/slice/sortOrderSlice'

interface SortOrderProps {
  className?: string
}

export const SortOrder: FC<SortOrderProps> = ({ className }) => {
  const { catalog } = useParams()
  const { setSortOrder } = useSortOrderActions()
  const sortOrder = useGetSortOrder()

  const currentSortKey =
    sortOrder.sortBy === 'price'
      ? sortOrder.order === 'asc'
        ? 'priceAsc'
        : 'priceDesc'
      : (sortOrder.sortBy ?? 'popular')

  const handleChange = (value: string) => {
    const selectedSort = SORT_ORDER_MAP[value]
    if (selectedSort) {
      setSortOrder(selectedSort)
    }
  }

  useEffect(() => {
    if (catalog == 'new' || catalog === 'sale') {
      setSortOrder(SORT_ORDER_MAP[catalog])
    }
    if (catalog == 'shop') {
      setSortOrder(SORT_ORDER_MAP.popular)
    }
  }, [catalog, setSortOrder])

  return (
    <div className={classNames(cls['sort-wrapper'], {}, [className])}>
      Sort by:
      <Select value={currentSortKey} onChange={handleChange} options={SORT_OPTIONS} />
    </div>
  )
}
