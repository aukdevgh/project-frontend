import { FC, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { getRouteAuth } from '@shared/lib/routes'
import { Container, Button, Icon, AppLink, Text } from '@shared/ui'

import cls from './Topbar.module.scss'

interface TopbarProps {
  className?: string
}

export const Topbar: FC<TopbarProps> = ({ className }) => {
  const [isHide, setIsHide] = useState(false)

  return (
    <div className={classNames(cls.topbar, { [cls.hide]: isHide }, [className])}>
      <Container className={cls.content}>
        <div className={cls.banner}>
          <Text>Sign up and get 20% off your first order! </Text>
          <AppLink className={cls.link} to={getRouteAuth()} variant="clear">
            Sign Up Now
          </AppLink>
        </div>
        <Button
          className={cls.close}
          variant="clear"
          size="icon"
          onClick={() => setIsHide(true)}
          aria-label="hide topbar"
        >
          <Icon type="Close" />
        </Button>
      </Container>
    </div>
  )
}
