import { memo, SVGProps } from 'react'

import { classNames } from '@shared/lib/classNames'

import { IconType, iconTypes } from '../types/IconTypes'

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
  type: IconType
}

export const Icon = memo((props: IconProps) => {
  const { className, height = 16, width = 16, type, ...otherProps } = props

  const Svg = iconTypes.get(type)

  if (!Svg) {
    console.error(`Icon of type ${type} not found.`)
    return null
  }

  return <Svg className={classNames('', {}, [className])} height={height} width={width} {...otherProps} />
})
