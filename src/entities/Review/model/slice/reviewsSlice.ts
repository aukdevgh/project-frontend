import { PayloadAction } from '@reduxjs/toolkit'

import { buildSlice } from '@shared/hooks/store'

import { ReviewsSchema } from '../types/reviewsSchema'

const initialState: ReviewsSchema = {
  reviews: [],
  page: 1,
  total: 0,
  hasMore: false,
  hasLoaded: false,
}
const reviewsSlice = buildSlice({
  name: 'review',
  initialState,
  reducers: {
    setReviewsData(state, action: PayloadAction<ReviewsSchema>) {
      state.reviews = [...state.reviews, ...action.payload.reviews]
      state.total = action.payload.total
      state.hasMore = action.payload.hasMore
      state.hasLoaded = action.payload.hasLoaded
    },
    setReviewsPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    resetReviewsData() {
      return initialState
    },
  },
})

export const { actions: reviewsActions, reducer: reviewsReducer, useActions: useReviewsActions } = reviewsSlice
