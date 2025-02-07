import { memo, useRef, useState, useCallback, ChangeEvent, useEffect } from 'react'

import { useDebounce } from '@shared/hooks/useDebounce'
import { classNames } from '@shared/lib/classNames'

import cls from './RangeSlider.module.scss'

interface RangeSliderProps {
  className?: string
  isShowTooltip?: boolean
  max: number
  min: number
  onChange: (value: { min: number; max: number }) => void
  step: number
  value: { min: number; max: number }
}

export const RangeSlider = memo((props: RangeSliderProps) => {
  const { className, isShowTooltip = false, max, min, onChange, step, value } = props

  const debouncedOnChange = useDebounce(onChange, 200)

  const [range, setRange] = useState(value)

  const trackRef = useRef<HTMLDivElement | null>(null)

  const calculateStyles = useCallback(() => {
    const minPercent = ((range.min - min) / (max - min)) * 100
    const maxPercent = ((range.max - min) / (max - min)) * 100

    return {
      track: {
        left: `${minPercent}%`,
        right: `${100 - maxPercent}%`,
      },
      tooltipMin: {
        left: `${minPercent}%`,
        transform: `translateX(-${minPercent < 10 ? minPercent : minPercent + 60}%)`,
      },
      tooltipMax: {
        left: `${maxPercent}%`,
        transform: `translateX(-${maxPercent > 90 ? maxPercent : maxPercent - 60}%)`,
      },
    }
  }, [range, min, max])

  const styles = calculateStyles()

  const handleChange = (type: 'min' | 'max') => (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)

    setRange((prev) => {
      const newRange = {
        ...prev,
        [type]: type === 'min' ? Math.min(value, prev.max) : Math.max(value, prev.min),
      }
      debouncedOnChange({ min: newRange.min, max: newRange.max })
      return newRange
    })
  }

  useEffect(() => {
    setRange({ min, max })
  }, [min, max])

  return (
    <div className={classNames(cls['range-slider'], {}, [className])}>
      <div className={cls.slider}>
        <div className={cls['track-initial']}></div>
        <div className={cls.track} ref={trackRef} style={styles.track}></div>
        <input
          className={cls.input}
          max={max}
          min={min}
          step={step}
          type="range"
          value={range.min}
          onChange={handleChange('min')}
        />
        <input
          className={cls.input}
          max={max}
          min={min}
          step={step}
          type="range"
          value={range.max}
          onChange={handleChange('max')}
        />
        {isShowTooltip && (
          <>
            <div className={cls['tooltip-wrapper']} style={styles.tooltipMin}>
              <div className={cls['tooltip-min']}>{range.min}</div>
            </div>
            <div className={cls['tooltip-wrapper']} style={styles.tooltipMax}>
              <div className={cls['tooltip-max']}>{range.max}</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
})
