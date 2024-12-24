import { createElement, memo, ReactNode } from 'react'

import { classNames } from '@shared/lib/classNames/classNames'

import cls from './Headling.module.scss'

type HeadlingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadlingAlign = 'left' | 'center' | 'right'

type HeadlingWrap = 'wrap' | 'nowrap' | 'pretty' | 'balance'

type HeadlingWeight = 'regular' | 'medium' | 'bold'

type HeadlingSize = 'subheading' | 'heading' | 'title-small' | 'title-medium' | 'title-large' | 'banner'

type HeadlingTransform = 'none' | 'uppercase' | 'capitalize' | 'lowercase'

type HeadlingFont = 'primary' | 'secondary'

interface HeadlingProps {
  className?: string
  as?: HeadlingTag
  align?: HeadlingAlign
  wrap?: HeadlingWrap
  weight?: HeadlingWeight
  size?: HeadlingSize
  transform?: HeadlingTransform
  font?: HeadlingFont
  children?: ReactNode
  dataTestId?: string
}

export const Headling = memo(
  ({
    className,
    as = 'h1',
    align = 'left',
    wrap = 'wrap',
    weight = 'bold',
    size = 'subheading',
    transform = 'uppercase',
    font = 'primary',
    children,
    dataTestId = 'ui_Headling',
    ...otherProps
  }: HeadlingProps) => {
    const additionalClass = [className, cls[align], cls[wrap], cls[weight], cls[size], cls[transform], cls[font]]

    const props = {
      className: classNames('', {}, additionalClass),
      'data-testid': dataTestId,
      ...otherProps,
    }

    return createElement(as, props, children)
  }
)
