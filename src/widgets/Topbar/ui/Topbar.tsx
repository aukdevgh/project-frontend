import { FC, useState } from 'react'

import { PromoBanner } from '@features/PromoBanner'

import { classNames } from '@shared/lib/classNames'
import { Container, Button, Icon } from '@shared/ui'

import cls from './Topbar.module.scss'

interface TopbarProps {
  className?: string
}

export const Topbar: FC<TopbarProps> = ({ className }) => {
  const [isHide, setIsHide] = useState(false)

  return (
    <div className={classNames(cls.topbar, { [cls.hide]: isHide }, [className])}>
      <Container className={cls.content}>
        <PromoBanner className={cls.banner} />
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
