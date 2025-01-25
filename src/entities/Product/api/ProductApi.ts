import { baseApi } from '@shared/api'

import { Product, ProductDetails, ProductsQueryArgs, ProductsResponse } from '../types'

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductById: build.query<ProductDetails, string>({
      query: (productId) => ({
        url: `products/${productId}`,
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
        page,
        colors,
        sizes,
        select = [
          'id',
          'name',
          'brand',
          'category',
          'price',
          'discountPercentage',
          'rating',
          'thumbnail',
          'colors',
          'sizes',
        ],
      }) => {
        const params = new URLSearchParams()

        if (category) params.append('category', category)
        if (filterByBrand) params.append('filterByBrand', filterByBrand)
        if (sortBy) params.append('sortBy', sortBy)
        if (order) params.append('order', order)
        if (minPrice) params.append('minPrice', minPrice.toString())
        if (maxPrice) params.append('maxPrice', maxPrice.toString())
        if (limit) params.append('limit', limit.toString())
        if (page) params.append('page', page.toString())
        if (select) params.append('select', select.join(','))
        if (colors) params.append('colors', colors.join(','))
        if (sizes) params.append('sizes', sizes.join(','))

        return `/products?${params.toString()}`
      },
      transformResponse: (response: { products: Product[]; total: number; hasMore: boolean }) => response,
    }),
  }),
})
