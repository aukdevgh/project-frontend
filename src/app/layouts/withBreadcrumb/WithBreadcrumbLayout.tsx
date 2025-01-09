import { FC } from 'react'

import { Footer } from '@widgets/Footer'
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
      footer={<Footer />}
    />
  )
}

export default WithBreadcrumbLayout
