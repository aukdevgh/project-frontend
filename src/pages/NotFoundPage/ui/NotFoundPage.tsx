import { FC } from 'react'

import { getRouteHome } from '@shared/lib/routes'
import { AppLink, Container, Headling } from '@shared/ui'

import cls from './NotFoundPage.module.scss'

const NotFoundPage: FC = () => {
  return (
    <Container className={cls.container}>
      <Headling as="h2">Page not found</Headling>
      <AppLink to={getRouteHome()}>Home page</AppLink>
    </Container>
  )
}

export default NotFoundPage
