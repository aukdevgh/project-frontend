import { FC, useEffect } from 'react'
import { useParams } from 'react-router'

import { classNames } from '@shared/lib/classNames'
import { Select } from '@shared/ui'

import cls from './Sort.module.scss'
import { SORT_OPTIONS, SORT_MAP } from '../consts/consts'
import { useGetSortParams } from '../model/selectors/getSortParams/getSortParams'
import { useSortActions } from '../model/slice/sortSlice'

interface SortProps {
  className?: string
}

export const Sort: FC<SortProps> = ({ className }) => {
  const { catalog } = useParams()
  const { setSort } = useSortActions()
  const sortParams = useGetSortParams()

  const currentSortKey =
    sortParams.sortBy === 'price'
      ? sortParams.sortDirection === 'asc'
        ? 'priceAsc'
        : 'priceDesc'
      : (sortParams.sortBy ?? 'popular')

  const handleChange = (value: string) => {
    const selectedSort = SORT_MAP[value]
    if (selectedSort) {
      setSort(selectedSort)
    }
  }

  useEffect(() => {
    if (catalog == 'new' || catalog === 'sale') {
      setSort(SORT_MAP[catalog])
    }
    if (catalog == 'shop') {
      setSort(SORT_MAP.popular)
    }
  }, [catalog, setSort])

  return (
    <div className={classNames(cls['sort-wrapper'], {}, [className])}>
      Sort by:
      <Select value={currentSortKey} onChange={handleChange} options={SORT_OPTIONS} />
    </div>
  )
}
