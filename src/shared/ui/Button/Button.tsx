import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'clear' | 'danger' | 'ghost'
type ButtonSize = 'normal' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  square?: boolean
  isActive?: boolean
  disabled?: boolean
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, isActive, disabled, loading, variant = 'primary', size = 'normal', type, ...otherProps },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          cls.button,
          { [cls.active]: isActive, [cls.disabled]: disabled, [cls.loading]: loading },
          [className, cls[variant], cls[size]]
        )}
        disabled={disabled}
        type={type}
        {...otherProps}
      >
        {children}
        {loading && <span className={cls.loader}></span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
