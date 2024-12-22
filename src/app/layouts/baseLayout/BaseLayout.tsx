import { FC } from 'react'

import { Header } from '@widgets/Header'

import { Layout } from '@shared/layouts/Layout'

const BaseLayout: FC = () => {
  return <Layout header={<Header />} />
}
export default BaseLayout
