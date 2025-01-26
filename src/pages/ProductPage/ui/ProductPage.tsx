import { FC, useMemo } from 'react'
import { useParams } from 'react-router'

import { ProductBigCard, useGetProductById } from '@entities/Product'
import { ProductReviews } from '@entities/Review'

import { Container, type Tab, Tabs } from '@shared/ui'

import { Details } from './Details'
import { FAQs } from './FAQs'
import cls from './ProductPage.module.scss'
import { ProductPageSkeleton } from './ProductPageSkeleton'

const ProductPage: FC = () => {
  const { productId } = useParams()
  const { data: product, isFetching } = useGetProductById(productId)

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
      content: <ProductReviews productId={productId} />,
    }),
    [productId]
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

  if (!productId || isFetching) {
    return <ProductPageSkeleton />
  }

  return (
    <Container>
      <ProductBigCard className={cls.product} product={product} />
      <Tabs tabs={tabs} />
    </Container>
  )
}

export default ProductPage
