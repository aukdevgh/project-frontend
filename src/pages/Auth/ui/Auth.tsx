import { FC } from 'react'

import { AuthForm } from '@features/Auth'

import cls from './Auth.module.scss'

const Auth: FC = () => {
  return (
    <div className={cls.container}>
      <AuthForm className={cls.card} />
    </div>
  )
}
export default Auth
