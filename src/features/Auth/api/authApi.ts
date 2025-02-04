import { baseApi } from '@shared/api'

import { AuthLoginData, AuthRegisterData } from '../model/types/authSchema'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ msg: string }, AuthLoginData>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: build.mutation<{ msg: string }, AuthRegisterData>({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    logout: build.query<{ msg: string }, void>({
      query: () => 'auth/logout',
    }),
    checkAuth: build.query<{ msg: string }, void>({
      query: () => 'auth/refresh',
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useLazyLogoutQuery, useCheckAuthQuery } = authApi
