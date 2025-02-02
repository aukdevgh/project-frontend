import { FC, useEffect } from 'react'

import { LogoutButton } from '@features/Auth'
import { OrderCard, useLazyGetOrdersQuery } from '@features/Order'

import { Container, Line } from '@shared/ui'

import cls from './Profile.module.scss'

const Profile: FC = () => {
  const [getOrders, { data: orders }] = useLazyGetOrdersQuery()

  useEffect(() => {
    getOrders()
  }, [getOrders])

  return (
    <Container className={cls.profile}>
      <ul className={cls['order-list']}>
        {orders &&
          orders.map((order) => (
            <li className={cls['order-item']} key={order.id}>
              <OrderCard order={order} key={order.id} />
              <Line className={cls.line} />
            </li>
          ))}
      </ul>

      <LogoutButton />
    </Container>
  )
}
export default Profile
