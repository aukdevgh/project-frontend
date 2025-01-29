import { buildSelector } from '@shared/hooks/store'

export const [useGetIsAuth, getIsAuth] = buildSelector((state) => state.auth.isAuth)
