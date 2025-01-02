import { FC } from 'react'

import { Header } from '@widgets/Header'
import { Topbar } from '@widgets/Topbar'

import { Breadcrumbs } from '@features/Breadcrumbs'

import { Layout } from '@shared/layouts/Layout'
import { Container } from '@shared/ui/Container'

const WithBreadcrumbLayout: FC = () => {
  return (
    <Layout
      topbar={<Topbar />}
      header={<Header />}
      breadcrumb={
        <Container>
          <Breadcrumbs />
        </Container>
      }
    />
  )
}

export default WithBreadcrumbLayout
