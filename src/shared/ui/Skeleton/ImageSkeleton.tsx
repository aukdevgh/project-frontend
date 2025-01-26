import { FC, ImgHTMLAttributes } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Skeleton.module.scss'

interface ImageSkeletonProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

export const ImageSkeleton: FC<ImageSkeletonProps> = ({ className, alt = 'skeleton', width, height }) => {
  return (
    <img
      className={classNames(cls.img, {}, [className])}
      src="/img/transparent.png"
      alt={alt}
      width={width}
      height={height}
    />
  )
}
