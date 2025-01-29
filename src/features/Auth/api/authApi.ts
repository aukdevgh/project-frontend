import { baseApi } from '@shared/api'

import { AuthLoginData, AuthRegisterData } from '../model/types/authSchema'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<void, AuthLoginData>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: build.mutation<void, AuthRegisterData>({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    logout: build.query<void, void>({
      query: () => 'auth/logout',
    }),
    checkAuth: build.query<void, void>({
      query: () => 'auth/refresh',
    }),
  }),
})
