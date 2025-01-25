import { FC, useCallback, useEffect, useRef, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Option } from '@shared/types/select'
import { Button } from '@shared/ui/Button'
import { Icon } from '@shared/ui/Icon'

import cls from './Select.module.scss'

type SelectProps = {
  className?: string
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export const Select: FC<SelectProps> = ({ className, value, options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectedOption = options.find((option) => option.value === value)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Закрытие при клике вне компонента
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }, [])

  // Закрытие по Escape
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
      buttonRef.current?.focus() // Вернуть фокус на кнопку
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('click', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClickOutside, handleKeyDown])

  return (
    <div className={classNames(cls['select-wrapper'], {}, [className])} ref={rootRef}>
      <Button ref={buttonRef} className={cls.label} onClick={() => setIsOpen((prev) => !prev)} variant="clear">
        {selectedOption ? selectedOption.label : placeholder || 'Select an option'}
        <Icon className={classNames(cls.arrow, { [cls.open]: isOpen }, [])} type="ArrowDown" />
      </Button>
      {isOpen && (
        <ul className={cls.dropdown}>
          {options.map((option) => (
            <li key={option.value}>
              <Button
                className={cls.option}
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                  buttonRef.current?.focus()
                }}
                variant="clear"
              >
                {option.label}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
