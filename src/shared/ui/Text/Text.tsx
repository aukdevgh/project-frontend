import { createElement, memo, ReactNode } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Text.module.scss'

type TextTag = 'span' | 'div' | 'label' | 'p'

type TextAlign = 'left' | 'center' | 'right'

type TextWrap = 'wrap' | 'nowrap' | 'pretty' | 'balance'

type TextWeight = 'regular' | 'medium' | 'bold'

type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl'

type TextTransform = 'none' | 'uppercase' | 'capitalize' | 'lowercase'

type TextDecoration = 'none' | 'line-through' | 'overline' | 'underline'

interface TextProps {
  className?: string
  as?: TextTag
  align?: TextAlign
  wrap?: TextWrap
  weight?: TextWeight
  size?: TextSize
  transform?: TextTransform
  decoration?: TextDecoration
  children?: ReactNode
  dataTestId?: string
  htmlFor?: string
  deprecated?: boolean
  error?: boolean
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
    decoration = 'none',
    children,
    dataTestId = 'ui_text',
    htmlFor,
    deprecated = false,
    error = false,
    ...otherProps
  }: TextProps) => {
    const additionalClass = [className, cls[align], cls[wrap], cls[weight], cls[size], cls[transform], cls[decoration]]

    const props = {
      className: classNames('', { [cls.deprecated]: deprecated, [cls.error]: error }, additionalClass),
      'data-testid': dataTestId,
      ...(as === 'label' && htmlFor && { htmlFor }),
      ...otherProps,
    }

    return createElement(as, props, children)
  }
)
