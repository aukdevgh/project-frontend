import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Icon } from '@shared/ui/Icon'

import cls from './SocialLinks.module.scss'

interface SocialLinksProps {
  className?: string
}

export const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={classNames(cls['social-links'], {}, [className])}>
      <a className={cls.link} href="https://x.com/" target="_blank" aria-label="x.com" rel="noreferrer">
        <Icon type="XCOM" width={28} height={28} />
      </a>
      <a className={cls.link} href="https://www.facebook.com/" aria-label="facebook" target="_blank" rel="noreferrer">
        <Icon type="Facebook" width={28} height={28} />
      </a>
      <a className={cls.link} href="https://www.instagram.com/" aria-label="instagram" target="_blank" rel="noreferrer">
        <Icon type="Instagram" width={28} height={28} />
      </a>
      <a className={cls.link} href="https://github.com/" aria-label="github" target="_blank" rel="noreferrer">
        <Icon type="Github" width={28} height={28} />
      </a>
    </div>
  )
}
