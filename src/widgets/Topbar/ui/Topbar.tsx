import { FC, useState } from 'react'

import { PromoBanner } from '@features/PromoBanner'

import CloseIcon from '@shared/assets/icon/close.svg'
import { classNames } from '@shared/lib/classNames/classNames'
import { Button } from '@shared/ui/Button'
import { Container } from '@shared/ui/Container'

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
        <Button className={cls.close} variant="clear" size="icon" onClick={() => setIsHide(true)}>
          <CloseIcon />
        </Button>
      </Container>
    </div>
  )
}
