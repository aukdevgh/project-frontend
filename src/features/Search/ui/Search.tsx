import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { useDebounce } from '@shared/lib/hooks/useDebounce'
import { getRouteProductById } from '@shared/lib/routes'
import { Icon } from '@shared/ui/Icon'
import { Input } from '@shared/ui/Input'
import { AppLink } from '@shared/ui/Link'
import { Text } from '@shared/ui/Text'

import cls from './Search.module.scss'
import { useLazyGetProductsBySearchQuery } from '../api/searchApi'

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

      {isOpen && searchQuery && (
        <div className={cls.catalog}>
          <ul className={cls.list}>
            {data?.products.length === 0 && <li className={cls.item}>Not found</li>}
            {data?.products.map((product) => (
              <li className={cls.item} key={product.id}>
                <AppLink to={getRouteProductById(`${product.id}`)} variant="clear">
                  {product.title}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
