import { FC, useState, type MouseEvent } from 'react'

import { ProductDetails } from '@entities/Product/types'

import { classNames } from '@shared/lib/classNames'
import { AppImage, Button, Headling, Icon, ImageSwiper, Line, SizeList, Text } from '@shared/ui'

import cls from './ProductBigCard.module.scss'
import { ProductBigCardSkeleton } from './ProductBigCardSkeleton'
import { ProductPrice } from '../ProductPrice/ProductPrice'
import { ProductRating } from '../ProductRating/ProductRating'

interface ProductBigCardProps {
  className?: string
  product?: ProductDetails
}

export const ProductBigCard: FC<ProductBigCardProps> = ({ className, product }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] ?? '')
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

  if (!product) {
    return <ProductBigCardSkeleton />
  }

  const onMinus = () => setQuantity((prev) => Math.max(1, prev - 1))
  const onPlus = () => setQuantity((prev) => prev + 1)

  const handleSelectColor = (color: string) => {
    setSelectedColor(color)
  }

  const handleSelectSizes = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement
    const size = target.innerText
    setSelectedSizes((sizes) => (sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size]))
  }

  const getImageByColor = (color: string) => product?.images.find((image) => image.includes(color)) || ''
  const getImagesBySelectedColor = () => product.images.filter((image) => image.includes(selectedColor)) || ['']

  return (
    <div className={classNames(cls.product, {}, [className])}>
      <ImageSwiper images={getImagesBySelectedColor()} />

      <div className={cls['product-info']}>
        <Headling size="title-medium" weight="bold">
          {product?.name}
        </Headling>

        <ProductRating rating={product.rating} />
        <ProductPrice price={product.price} discountPercentage={product.discountPercentage} />

        <Line />
        <Headling transform="capitalize">Colors:</Headling>
        <div className={cls.row}>
          {product.colors.map((color) => {
            return (
              <Button
                className={classNames(cls['color-btn'], { [cls.active]: color === selectedColor }, [])}
                variant="clear"
                key={color}
                onClick={() => handleSelectColor(color)}
                aria-selected={color === selectedColor}
                aria-label={`Select color ${color}`}
              >
                <AppImage
                  className={cls.thumb}
                  src={getImageByColor(color)}
                  alt={product.name}
                  width={'60'}
                  height={'60'}
                />
              </Button>
            )
          })}
        </div>
        <Line />

        <Headling transform="capitalize">Sizes:</Headling>
        <SizeList sizes={product.sizes} selectedSizes={selectedSizes} handleSizeClick={handleSelectSizes} />

        <Line />
        <div className={cls.cart}>
          <div className={cls.quantity}>
            <Button onClick={onMinus} variant="clear" size="icon" aria-label="Decrease quantity">
              <Icon type="Minus" width={24} height={24} />
            </Button>
            <Text>{quantity}</Text>
            <Button onClick={onPlus} variant="clear" size="icon" aria-label="Increase quantity">
              <Icon type="Plus" width={24} height={24} />
            </Button>
          </div>
          <Button className={cls['add-btn']}>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}
