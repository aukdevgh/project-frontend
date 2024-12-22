import { FC } from 'react'

import { Header } from '@widgets/Header'
import { Topbar } from '@widgets/Topbar'

import { Layout } from '@shared/layouts/Layout'

const BaseLayout: FC = () => {
  return <Layout topbar={<Topbar />} header={<Header />} />
}
export default BaseLayout
