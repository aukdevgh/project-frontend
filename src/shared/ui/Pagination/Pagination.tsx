import { FC, useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'

import { classNames } from '@shared/lib/classNames'
import { Button, Icon } from '@shared/ui'

import cls from './Pagination.module.scss'

interface PaginationProps {
  className?: string
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({ className, currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const EDGE_PAGE_COUNT = isMobile ? 2 : 3

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).reduce<(number | 'ellipsis')[]>((acc, page) => {
      const isFirstFew = page <= EDGE_PAGE_COUNT
      const isLastFew = page > totalPages - EDGE_PAGE_COUNT
      const isNearCurrent = Math.abs(page - currentPage) <= 1
      const prevPage = acc[acc.length - 1]

      if (isFirstFew || isLastFew || isNearCurrent) {
        if (typeof prevPage === 'number' && page - prevPage > 1) {
          acc.push('ellipsis')
        }
        acc.push(page)
      }
      return acc
    }, [])
  }, [totalPages, currentPage, EDGE_PAGE_COUNT])

  if (totalPages < 2) {
    return null
  }

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  const handlePageClick = (page: number) => {
    if (page !== currentPage) onPageChange(page)
  }

  return (
    <div className={classNames(cls.pagination, {}, [className])}>
      <Button
        className={classNames(cls.button, {}, [cls['button-prev']])}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        variant="secondary"
        aria-label="prev"
      >
        <Icon type="ArrowLeft" width={20} height={20} />
        {!isMobile && 'Prev'}
      </Button>

      <ul className={cls['pages-list']}>
        {pages.map((item, index) =>
          item === 'ellipsis' ? (
            <li key={`ellipsis-${index}`}>
              <Button className={cls.page} variant="clear" disabled>
                ...
              </Button>
            </li>
          ) : (
            <li key={item}>
              <Button
                className={classNames(cls.page, { [cls.active]: item === currentPage })}
                onClick={() => handlePageClick(item as number)}
                variant="clear"
              >
                {item}
              </Button>
            </li>
          )
        )}
      </ul>

      <Button
        className={classNames(cls.button, {}, [cls['button-next']])}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        variant="secondary"
        aria-label="next"
      >
        {!isMobile && 'Next'}
        <Icon className={cls['arrow-right']} type="ArrowLeft" width={20} height={20} />
      </Button>
    </div>
  )
}
