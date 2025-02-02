import { ImgHTMLAttributes, memo, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { ImageSkeleton } from '@shared/ui'

import cls from './AppImage.module.scss'

type Radius = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl'

interface SourceProps {
  srcSet: string
  media?: string // "(max-width: 768px)"
  type?: string // "image/webp"
}
interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  sources?: SourceProps[]
  radius?: Radius
  local?: boolean
}

export const AppImage = memo((props: AppImageProps) => {
  const {
    className,
    src = '',
    sources = [],
    alt = 'image',
    width,
    height,
    loading = 'lazy',
    radius = 'none',
    local,
    ...otherProps
  } = props
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <div className={classNames(cls.wrapper, {}, [className, cls[radius]])}>
      {isLoading && (
        <ImageSkeleton
          className={classNames(cls.img, { [cls.active]: isLoading }, [])}
          alt={alt}
          width={width}
          height={height}
        />
      )}

      {isError && (
        <img
          className={classNames(cls.img, { [cls.active]: isError }, [])}
          src="/img/image-fallback.webp"
          alt={alt}
          width={width}
          height={height}
        />
      )}

      <picture className={classNames('', { [cls.hide]: isError, [cls.transparent]: isLoading }, [])}>
        {sources &&
          sources.map((source, index) => (
            <source key={index} srcSet={source.srcSet} media={source.media} type={source.type} />
          ))}
        <img
          className={cls.img}
          src={local ? src : `${import.meta.env.VITE_IMAGE_URL}/${src}`}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setIsError(true)
          }}
          loading={loading}
          {...otherProps}
        />
      </picture>
    </div>
  )
})
