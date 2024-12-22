import { FC } from 'react'

import { Header } from '@widgets/Header'

import { Layout } from '@shared/layouts/Layout'

const WithBreadcrumbLayout: FC = () => {
  return <Layout header={<Header />} breadcrumb={<div>breadcrumb</div>} />
}

export default WithBreadcrumbLayout
