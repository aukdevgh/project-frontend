import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { classNames } from '@shared/lib/classNames/classNames'

import cls from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'clear'
type ButtonSize = 'normal' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  isActive?: boolean
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  isActive,
  disabled,
  variant = 'primary',
  size = 'normal',
  type,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.button, { [cls.active]: isActive, [cls.disabled]: disabled }, [
        className,
        cls[variant],
        cls[size],
      ])}
      disabled={disabled}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  )
}
