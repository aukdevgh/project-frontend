import { FC, useEffect } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Line } from '@shared/ui'

import cls from './OrdersList.module.scss'
import { useLazyGetOrdersQuery } from '../../api/orderApi'
import { useGetHasLoadedOrders } from '../../model/selectors/getHasLoadedOrders/getHasLoadedOrders'
import { useGetOrders } from '../../model/selectors/getOrders/getOrders'
import { useOrderActions } from '../../model/slice/orderSlice'
import { OrderCard } from '../OrderCard/OrderCard'
import { OrderCardSkeleton } from '../OrderCard/OrderCard.skeleton'

interface OrdersListProps {
  className?: string
}

export const OrdersList: FC<OrdersListProps> = ({ className }) => {
  const [getOrders, { isFetching }] = useLazyGetOrdersQuery()
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

  if (isFetching) {
    return (
      <ul className={classNames(cls['orders-list'], {}, [className])}>
        {[1, 2, 3].map((order) => (
          <OrderCardSkeleton key={order} />
        ))}
      </ul>
    )
  }

  return (
    <ul className={classNames(cls['orders-list'], {}, [className])}>
      {orders.length > 0 ? (
        orders.map((order) => (
          <li className={cls['orders-item']} key={order.id}>
            <OrderCard order={order} key={order.id} />
            <Line className={cls.line} />
          </li>
        ))
      ) : (
        <li className={cls['orders-item']}>There are no ordered products yet</li>
      )}
    </ul>
  )
}
