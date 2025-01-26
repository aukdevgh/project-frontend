import { FC } from 'react'

import { Intro } from '@widgets/Intro'
import { Reviews } from '@widgets/Reviews'
import { Showcase } from '@widgets/Showcase'

import { AppLink, Line } from '@shared/ui'

const Home: FC = () => {
  return (
    <>
      <Intro />

      <Showcase title="NEW ARRIVALS" sortBy="new" limit={4}>
        <AppLink to={'/new'} variant="outline">
          See All
        </AppLink>
      </Showcase>

      <Line className={'container'} />

      <Showcase title="TOP SELLING" sortBy="sale" limit={4}>
        <AppLink to={'/sale'} variant="outline">
          See All
        </AppLink>
      </Showcase>

      <Reviews />
    </>
  )
}
export default Home
