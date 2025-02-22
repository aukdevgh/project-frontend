import { FC, MouseEvent } from 'react'

import { classNames } from '@shared/lib/classNames'
import { formatCategoryName } from '@shared/lib/path'
import { Button, Icon, Skeleton } from '@shared/ui'

import cls from './CategoryList.module.scss'
import { useGetCategoryListQuery } from '../../api/filterApi'

interface CategoryListProps {
  className?: string
  category?: string
  selectedCategory: string
  handleCategoryClick: (category: string) => void
}

export const CategoryList: FC<CategoryListProps> = ({ className, category, selectedCategory, handleCategoryClick }) => {
  const { data: subcategoryList, isFetching } = useGetCategoryListQuery(category)

  const handleSelectCategory = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLLIElement
    handleCategoryClick(target.getAttribute('data-category') ?? '')
  }

  if (isFetching) {
    return (
      <ul className={classNames(cls.list, {}, [className])}>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <Skeleton height={22} width={'100%'} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul onClick={handleSelectCategory} className={classNames(cls.list, {}, [className])}>
      {subcategoryList?.map((subcategory) => (
        <li key={subcategory}>
          <Button
            className={classNames(cls.item, { [cls.active]: selectedCategory === subcategory }, [])}
            variant="clear"
            data-category={subcategory}
          >
            {category ? formatCategoryName(category, subcategory) : subcategory}
            <Icon type="ArrowRight" />
          </Button>
        </li>
      ))}
    </ul>
  )
}
