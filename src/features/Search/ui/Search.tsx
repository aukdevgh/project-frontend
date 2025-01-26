import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { useDebounce } from '@shared/lib/hooks/useDebounce'
import { Icon, Input, Text } from '@shared/ui'

import cls from './Search.module.scss'
import { useLazyGetProductsBySearchQuery } from '../api/searchApi'
import { SearchItem } from './SearchItem/SearchItem'

interface SearchProps {
  className?: string
}

export const Search: FC<SearchProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [getProducts, { data, isError }] = useLazyGetProductsBySearchQuery()
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const onChange = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setIsOpen(true)
  }, 400)

  useEffect(() => {
    if (searchQuery) {
      getProducts({ searchQuery })
    }
  }, [searchQuery, getProducts])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className={classNames(cls.search, {}, [className])} ref={searchRef} onFocus={() => setIsOpen(true)}>
      <Input
        className={cls.search}
        addon={<Icon type="Search" width={24} height={24} />}
        placeholder="Search for products..."
        onChange={onChange}
      />
      {isError && <Text as="div">Произошла ошибка при загрузке</Text>}

      {isOpen && searchQuery && data && (
        <div className={cls.catalog}>
          <ul className={cls.list} onClick={() => setIsOpen(false)}>
            {data?.products.length === 0 && <li className={cls.item}>Not found</li>}
            {data?.products.map((product) => (
              <li className={cls.item} key={product.id}>
                <SearchItem product={product} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
