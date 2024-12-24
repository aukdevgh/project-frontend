import { FC, InputHTMLAttributes, ReactNode } from 'react'

import { classNames } from '@shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type InputVariant = 'primary' | 'secondary'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  addon?: ReactNode
  variant?: InputVariant
}

export const Input: FC<InputProps> = (props) => {
  const { className, value, onChange, placeholder, addon, type = 'text', variant = 'primary', ...otherProps } = props

  return (
    <label className={classNames(cls.field, {}, [className, cls[variant]])}>
      {addon && <div className={cls.addon}>{addon}</div>}

      <input
        className={cls.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...otherProps}
      />
    </label>
  )
}
