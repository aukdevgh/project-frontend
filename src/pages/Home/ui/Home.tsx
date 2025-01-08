import { FC } from 'react'

import { Intro } from '@widgets/Intro'
import { Showcase } from '@widgets/Showcase'

import { classNames } from '@shared/lib/classNames'
import { AppLink } from '@shared/ui/Link'

import cls from './Home.module.scss'

const Home: FC = () => {
  return (
    <>
      <Intro />

      <Showcase title="NEW ARRIVALS" sortBy="new" limit={4}>
        <AppLink className={cls.link} to={'/new'} variant="outline">
          See All
        </AppLink>
      </Showcase>

      <hr className={classNames(cls.line, {}, ['container'])} />

      <Showcase title="TOP SELLING" sortBy="sale" limit={4}>
        <AppLink className={cls.link} to={'/sale'} variant="outline">
          See All
        </AppLink>
      </Showcase>
    </>
  )
}
export default Home
