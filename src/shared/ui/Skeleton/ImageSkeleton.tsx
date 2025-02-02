import { FC, ImgHTMLAttributes } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Skeleton.module.scss'

type Radius = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl'

interface ImageSkeletonProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  radius?: Radius
}

export const ImageSkeleton: FC<ImageSkeletonProps> = ({
  className,
  alt = 'skeleton',
  width,
  height,
  radius = 'none',
}) => {
  return (
    <img
      className={classNames(cls.img, {}, [className, cls[radius]])}
      src="/img/transparent.png"
      alt={alt}
      width={width}
      height={height}
    />
  )
}
