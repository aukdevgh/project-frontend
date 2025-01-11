import { FC, useMemo } from 'react'
import { useParams } from 'react-router'

import { ProductBigCard, useGetProductById } from '@entities/Product'
import { ProductReviews } from '@entities/Review'

import { Container } from '@shared/ui/Container'
import { Headling } from '@shared/ui/Headling'
import { Tab, Tabs } from '@shared/ui/Tabs'
import { Text } from '@shared/ui/Text'

import cls from './ProductPage.module.scss'
import { ProductDetailsSkeleton } from './ProductPageSkeleton'

const ProductPage: FC = () => {
  const { productId } = useParams()
  const { data: product, isFetching } = useGetProductById(productId)

  const tabs: Tab[] = useMemo(
    () => [
      {
        label: 'Product Details',
        content: (
          <div className={cls.details}>
            <Headling as="h3">{product?.title}</Headling>
            <Text as="p">{product?.description}</Text>
            <ul className={cls.list}>
              <li>
                Category: <Text>{product?.category ? product?.category : '-'}</Text>
              </li>
              <li>
                Brand: <Text>{product?.brand ? product?.brand : '-'}</Text>
              </li>
              <li>
                SKU: <Text>{product?.sku ? product?.sku : '-'}</Text>
              </li>
              <li>
                Weight: <Text>{product?.weight ? product?.weight : '-'}</Text>
              </li>
              <li>
                Dimensions:{' '}
                <Text>
                  {product?.dimensions
                    ? `${product?.dimensions.width} X ${product?.dimensions.height} X ${product?.dimensions.depth} cm`
                    : '-'}
                </Text>
              </li>
              <li>
                Warranty: <Text>{product?.warrantyInformation ? product?.warrantyInformation : '-'}</Text>
              </li>
              <li>
                Shipping: <Text>{product?.shippingInformation ? product?.shippingInformation : '-'}</Text>
              </li>
              <li>
                Availability: <Text>{product?.availabilityStatus ? product?.availabilityStatus : '-'}</Text>
              </li>
            </ul>
          </div>
        ),
      },
      {
        label: 'Rating & Reviews',
        content: <ProductReviews productId={productId} />,
      },
      {
        label: 'FAQs',
        content: (
          <div className={cls.faqs}>
            <ul className={cls.list}>
              <li>
                Return Policy: <Text>{product?.returnPolicy ? product?.returnPolicy : '-'}</Text>
              </li>
              <li>
                Minimum Order Quantity:{' '}
                <Text>{product?.minimumOrderQuantity ? product?.minimumOrderQuantity : '-'}</Text>
              </li>
            </ul>
          </div>
        ),
      },
    ],
    [product, productId]
  )

  if (isFetching) {
    return <ProductDetailsSkeleton />
  }

  return (
    <Container>
      <ProductBigCard className={cls.product} product={product} />

      <Tabs tabs={tabs} />
    </Container>
  )
}

export default ProductPage
