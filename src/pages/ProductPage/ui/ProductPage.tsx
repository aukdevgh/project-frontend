import { FC, useMemo } from 'react'
import { useParams } from 'react-router'

import { useCartSync } from '@entities/Cart'
import { ProductBigCard, ProductBigCardSkeleton, useGetProductById } from '@entities/Product'

import { Container, Tabs, type Tab } from '@shared/ui'

import { Details } from './Details'
import { FAQs } from './FAQs'
import cls from './ProductPage.module.scss'
import { Reviews } from './Reviews/Reviews'

const ProductPage: FC = () => {
  const { productId } = useParams()
  const { data: product, isFetching } = useGetProductById(productId)
  const { addToCart } = useCartSync()

  const productDetailsTab = useMemo(
    () => ({
      label: 'Product Details',
      content: <Details product={product} />,
    }),
    [product]
  )

  const productReviewsTab = useMemo(
    () => ({
      label: 'Rating & Reviews',
      content: <Reviews />,
    }),
    []
  )

  const faqsTab = useMemo(
    () => ({
      label: 'FAQs',
      content: <FAQs product={product} />,
    }),
    [product]
  )

  const tabs: Tab[] = useMemo(
    () => [productDetailsTab, productReviewsTab, faqsTab],
    [productDetailsTab, productReviewsTab, faqsTab]
  )

  return (
    <Container>
      {!productId || isFetching ? (
        <ProductBigCardSkeleton className={cls.product} />
      ) : (
        <ProductBigCard className={cls.product} product={product} addToCart={addToCart} />
      )}

      <Tabs tabs={tabs} />
    </Container>
  )
}

export default ProductPage
