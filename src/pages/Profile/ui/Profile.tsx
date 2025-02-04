import { FC } from 'react'

import { LogoutButton } from '@features/Auth'

import { OrdersList } from '@entities/Order'

import { Container } from '@shared/ui'

import cls from './Profile.module.scss'

const Profile: FC = () => {
  return (
    <Container className={cls.profile}>
      <OrdersList />
      <LogoutButton className={cls.logout} />
    </Container>
  )
}
export default Profile
