import { PayloadAction } from '@reduxjs/toolkit'

import { buildSlice } from '@shared/hooks/store'

import { AuthSchema } from '../types/authSchema'

const initialState: AuthSchema = {
  isAuth: false,
}
const authSlice = buildSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
})

export const { actions: authActions, reducer: authReducer, useActions: useAuthActions } = authSlice
