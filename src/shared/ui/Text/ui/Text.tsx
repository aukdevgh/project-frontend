import { createElement, memo, ReactNode } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Text.module.scss'

type TextTag = 'span' | 'div' | 'label' | 'p'

type TextAlign = 'left' | 'center' | 'right'

type TextWrap = 'wrap' | 'nowrap' | 'pretty' | 'balance'

type TextWeight = 'regular' | 'medium' | 'bold'

type TextSize = 's' | 'm' | 'l'

type TextTransform = 'none' | 'uppercase' | 'capitalize' | 'lowercase'

interface TextProps {
  className?: string
  as?: TextTag
  align?: TextAlign
  wrap?: TextWrap
  weight?: TextWeight
  size?: TextSize
  transform?: TextTransform
  children?: ReactNode
  dataTestId?: string
  htmlFor?: string
}

export const Text = memo(
  ({
    className,
    as = 'span',
    align = 'left',
    wrap = 'wrap',
    weight = 'regular',
    size = 'm',
    transform = 'none',
    children,
    dataTestId = 'ui_text',
    htmlFor,
    ...otherProps
  }: TextProps) => {
    const additionalClass = [className, cls[align], cls[wrap], cls[weight], cls[size], cls[transform]]

    const props = {
      className: classNames('', {}, additionalClass),
      'data-testid': dataTestId,
      ...(as === 'label' && htmlFor && { htmlFor }),
      ...otherProps,
    }

    return createElement(as, props, children)
  }
)
