import { baseApi } from '@shared/api'

import { GetCategoryList, GetProductsByCategoryRequest, GetProductsResponse, Product } from '../types'

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductById: build.query<Product, number>({
      query: (productId) => ({
        url: `products/${productId}`,
      }),
    }),

    getProductsByCategory: build.query<GetProductsResponse, GetProductsByCategoryRequest>({
      query: ({ category }) => ({
        url: `products/category/${category}`,
      }),
    }),

    getCategoryList: build.query<GetCategoryList, void>({
      query: () => ({
        url: `products/category-list`,
      }),
    }),
  }),
})
