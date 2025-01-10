import { baseApi } from '@shared/api'

import { Product, ProductDetails, ProductsQueryArgs, ProductsResponse } from '../types'

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductById: build.query<ProductDetails, number>({
      query: (productId) => ({
        url: `products/${productId}`,
      }),
    }),

    getCategoryList: build.query<string[], string | undefined>({
      query: (category) => {
        const params = new URLSearchParams()

        if (category) params.append('category', category)

        return `products/category-list?${params.toString()}`
      },
      transformResponse: (response: string[]) => response,
    }),

    getBrandList: build.query<string[], void>({
      query: () => ({
        url: `products/brands`,
      }),
    }),

    getProducts: build.query<ProductsResponse, ProductsQueryArgs>({
      query: ({
        category,
        sortBy,
        filterByBrand,
        order,
        minPrice,
        maxPrice,
        limit,
        offset,
        select = ['id', 'title', 'brand', 'category', 'price', 'discountPercentage', 'rating', 'thumbnail'],
      }) => {
        const params = new URLSearchParams()

        if (category) params.append('category', category)
        if (filterByBrand) params.append('filterByBrand', filterByBrand)
        if (sortBy) params.append('sortBy', sortBy)
        if (order) params.append('order', order)
        if (minPrice) params.append('minPrice', minPrice.toString())
        if (maxPrice) params.append('maxPrice', maxPrice.toString())
        if (limit) params.append('limit', limit.toString())
        if (offset) params.append('offset', offset.toString())
        if (select) params.append('select', select.join(','))

        return `/products?${params.toString()}`
      },
      transformResponse: (response: { products: Product[]; total: number; hasMore: boolean }) => response,
    }),
  }),
})
