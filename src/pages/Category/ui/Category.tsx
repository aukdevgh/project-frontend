import { FC } from 'react'
import { useParams } from 'react-router'

import { ProductList, useGetCategoryListQuery } from '@entities/Product'
import { SortMap } from '@entities/Product/types'

import { formatPathName, generateCategoryPath } from '@shared/lib/path'
import { Container } from '@shared/ui/Container'
import { AppLink } from '@shared/ui/Link'

import cls from './Category.module.scss'

const Category: FC = () => {
  const { category } = useParams()
  const { subcategory } = useParams()

  const { data: categoryList } = useGetCategoryListQuery(
    category !== 'sale' && category !== 'new' ? category : undefined
  )

  if (!category) {
    return null
  }

  return (
    <Container className={cls.category}>
      <ul>
        {categoryList?.map((subcategory) => (
          <li key={subcategory}>
            <AppLink to={generateCategoryPath(subcategory)}>{formatPathName(category, subcategory)}</AppLink>
          </li>
        ))}
      </ul>

      <div className={cls.products}>
        {category === 'sale' || category === 'new' ? (
          <ProductList sortBy={SortMap[category]} limit={9} />
        ) : (
          <ProductList category={`${subcategory || category}`} limit={9} />
        )}
      </div>
    </Container>
  )
}

export default Category
