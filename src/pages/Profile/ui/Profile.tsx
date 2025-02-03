import { FC, useEffect } from 'react'

import { LogoutButton } from '@features/Auth'
import { OrderCard, useGetHasLoadedOrders, useGetOrders, useLazyGetOrdersQuery, useOrderActions } from '@features/Order'

import { Container, Line } from '@shared/ui'

import cls from './Profile.module.scss'

const Profile: FC = () => {
  const [getOrders] = useLazyGetOrdersQuery()
  const orders = useGetOrders()
  const hasLoaded = useGetHasLoadedOrders()
  const { setOrders } = useOrderActions()

  useEffect(() => {
    if (!hasLoaded) {
      getOrders()
        .unwrap()
        .then((data) => setOrders(data))
    }
  }, [hasLoaded])

  return (
    <Container className={cls.profile}>
      <ul className={cls['order-list']}>
        {orders.length > 0 ? (
          orders.map((order) => (
            <li className={cls['order-item']} key={order.id}>
              <OrderCard order={order} key={order.id} />
              <Line className={cls.line} />
            </li>
          ))
        ) : (
          <li className={cls['order-item']}>There are no ordered products yet</li>
        )}
      </ul>

      <LogoutButton className={cls.logout} />
    </Container>
  )
}
export default Profile
