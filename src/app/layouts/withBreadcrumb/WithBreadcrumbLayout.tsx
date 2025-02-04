import { FC } from 'react'

import { Breadcrumbs } from '@widgets/Breadcrumbs'
import { Footer } from '@widgets/Footer'
import { Header } from '@widgets/Header'
import { Topbar } from '@widgets/Topbar'

import { Layout } from '@shared/layouts/Layout'
import { Container } from '@shared/ui'

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
      footer={<Footer />}
    />
  )
}

export default WithBreadcrumbLayout
