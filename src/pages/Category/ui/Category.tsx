import { FC } from 'react'
import { useParams } from 'react-router'

import { useGetCategoryListQuery } from '@entities/Product'

import { formatPathName } from '@shared/lib/formatPathName'
import { AppLink } from '@shared/ui/Link'

import cls from './Category.module.scss'

const Category: FC = () => {
  const { category } = useParams()

  const { data } = useGetCategoryListQuery()

  if (!category) {
    return null
  }

  return (
    <div className={cls.center}>
      <h1>Category Page</h1>

      <ul>
        {data
          ?.filter((subcategory) => subcategory.startsWith(category))
          .map((subcategory) => (
            <li key={subcategory}>
              <AppLink to={subcategory}>{formatPathName(category, subcategory)}</AppLink>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Category
