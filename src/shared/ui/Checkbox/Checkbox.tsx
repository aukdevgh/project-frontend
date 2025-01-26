import { InputHTMLAttributes, memo, ReactNode } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Icon } from '@shared/ui'

import cls from './Checkbox.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

interface CheckboxProps extends HTMLInputProps {
  className?: string
  label?: ReactNode
  type?: 'checkbox' | 'radio'
  backgroundColor?: string
}

export const Checkbox = memo((props: CheckboxProps) => {
  const { className, label, type = 'checkbox', disabled = false, backgroundColor = 'white', ...otherProps } = props

  return (
    <label className={classNames(cls.check, { [cls.disabled]: disabled }, [className])}>
      <input className={cls.input} type={type} {...otherProps} />
      <span className={classNames(cls.marker, {}, [cls[type]])} style={{ backgroundColor: backgroundColor }}>
        <Icon type={type === 'checkbox' ? 'CheckMarker' : 'RadioMarker'} />
      </span>
      {label}
    </label>
  )
})
