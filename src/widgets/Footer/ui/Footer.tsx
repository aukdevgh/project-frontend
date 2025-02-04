import { FC } from 'react'

import { companyRoutes, FAQRoutes, helpRoutes, resourcesRoutes } from '@shared/constants/routes'
import { classNames } from '@shared/lib/classNames'
import { getRouteHome } from '@shared/lib/routes'
import { AppLink, Button, Container, Headling, Icon, Input, Line, SocialLinks, Text } from '@shared/ui'

import { BlokMenu } from './BlokMenu/BlokMenu'
import cls from './Footer.module.scss'
import { PaymentServices } from './PaymentServices/PaymentServices'

interface FooterProps {
  className?: string
}

export const Footer: FC<FooterProps> = ({ className }) => {
  //TODO Processing form
  return (
    <footer className={classNames(cls.footer, {}, ['footer'])}>
      <div className={cls.header}>
        <Container className={cls.container}>
          <div className={cls['header-content']}>
            <Headling className={cls.title} weight="bold">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </Headling>
            <form className={cls.form}>
              <Input addon={<Icon type="Email" />} placeholder="Enter your email address" />
              <Button type="submit" variant="secondary">
                Subscribe to Newsletter
              </Button>
            </form>
          </div>
        </Container>
      </div>

      <div className={classNames(cls['footer-inner'], {}, [className])}>
        <Container>
          <div className={cls.content}>
            <div className={cls.branding}>
              <AppLink to={getRouteHome()} variant="clear" aria-label="shop.co">
                <Icon className={cls.logo} type="Logo" width={167} height={23} />
              </AppLink>

              <Text className={cls.text}>
                We have clothes that suits your style and which you’re proud to wear. From women to men.
              </Text>
              <SocialLinks className={cls['social-links']} />
            </div>

            <BlokMenu className={cls['blok-menu']} title="company" routes={companyRoutes} />

            <BlokMenu className={cls['blok-menu']} title="help" routes={helpRoutes} />

            <BlokMenu className={cls['blok-menu']} title="FAQ" routes={FAQRoutes} />

            <BlokMenu className={cls['blok-menu']} title="resources" routes={resourcesRoutes} />
          </div>

          <Line className={cls.line} />

          <div className={cls.foot}>
            <Text className={cls.text}>Shop.co © 2000-2023, All Rights Reserved</Text>
            <PaymentServices />
          </div>
        </Container>
      </div>
    </footer>
  )
}
