import { FC } from 'react'

import { LogoutButton } from '@features/Auth'

import cls from './Profile.module.scss'

const Profile: FC = () => {
  return (
    <div className={cls.center}>
      <h1>Profile Page</h1>
      <LogoutButton />
    </div>
  )
}
export default Profile
