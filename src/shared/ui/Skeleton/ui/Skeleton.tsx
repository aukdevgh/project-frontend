import { HTMLAttributes, CSSProperties, memo } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Skeleton.module.scss'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border, ...otherProps } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return <div className={classNames(cls.skeleton, {}, [className])} style={styles} {...otherProps} />
})
