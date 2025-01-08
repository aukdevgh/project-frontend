import { FC, useState } from 'react'

import { ProductList, useGetBrandListQuery } from '@entities/Product'

import { classNames } from '@shared/lib/classNames'
import { Container } from '@shared/ui/Container'
import { Headling } from '@shared/ui/Headling'

import cls from './Brands.module.scss'

interface BrandsProps {
  className?: string
}

const Brands: FC<BrandsProps> = ({ className }) => {
  const [brand, setBrand] = useState('')
  const { data: brands } = useGetBrandListQuery()

  const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement

    if (target.tagName === 'LI') {
      setBrand(target.textContent as string)
    }
  }

  return (
    <Container className={classNames(cls.brands, {}, [className])}>
      <nav className={cls.nav}>
        <Headling as="h3">Brands</Headling>
        <ul className={cls.list} onClick={handleClick}>
          {brands?.map((brand) => (
            <li className={cls.item} key={brand}>
              {brand}
            </li>
          ))}
        </ul>
      </nav>
      <div className={cls.content}>
        <Headling>{brand || 'All Products'}</Headling>
        <ProductList filterByBrand={brand} limit={9} />
      </div>
    </Container>
  )
}

export default Brands
