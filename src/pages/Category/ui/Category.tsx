import { FC } from 'react'
import { Navigate, useParams } from 'react-router'

import { Filters, useGetCategory, useGetSelectedPriceRange, useGetColors, useGetSizes } from '@features/Filters'
import { Sort, useGetSortParams } from '@features/Sort'

import { ProductList } from '@entities/Product'

import { useMenu } from '@shared/lib/hooks/useMenu'
import { Button, Container, Icon, Menu } from '@shared/ui'

import cls from './Category.module.scss'

const allowedCatalogs = ['shop', 'mens', 'womens', 'new', 'sale']

const Category: FC = () => {
  const { catalog } = useParams()
  const category = useGetCategory()
  const priceRange = useGetSelectedPriceRange()
  const sortParams = useGetSortParams()
  const colors = useGetColors()
  const sizes = useGetSizes()

  const { isOpen, onOpen, onClose } = useMenu()

  if (!allowedCatalogs.includes(catalog || '')) {
    return <Navigate to="/notfound" replace />
  }

  return (
    <Container className={cls.category}>
      <Filters className={cls.filter} />

      <div className={cls.content}>
        <div className={cls.actions}>
          <Button
            className={cls['filter-menu-btn']}
            variant="secondary"
            size="icon"
            onClick={onOpen}
            aria-label="open filter menu"
          >
            <Icon type="Filter" />
          </Button>
          <Menu className={cls['filter-menu']} isOpen={isOpen} onClose={onClose}>
            <Filters onClose={onClose} />
          </Menu>
          <Sort className={cls.sort} />
        </div>

        <ProductList
          category={category}
          maxPrice={priceRange.max}
          minPrice={priceRange.min}
          sortBy={sortParams.sortBy}
          sortDirection={sortParams.sortDirection}
          colors={colors}
          sizes={sizes}
        />
      </div>
    </Container>
  )
}

export default Category
