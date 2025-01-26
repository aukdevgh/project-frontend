import { ProductBigCardSkeleton } from '@entities/Product'
import { ProductReviewsSkeleton } from '@entities/Review'

import { Container } from '@shared/ui'

export const ProductPageSkeleton = () => {
  return (
    <Container>
      <ProductBigCardSkeleton style={{ marginBottom: '60px' }} />

      <ProductReviewsSkeleton />
    </Container>
  )
}
