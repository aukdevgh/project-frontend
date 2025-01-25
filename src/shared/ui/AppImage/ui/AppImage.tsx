import { ImgHTMLAttributes, memo, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { ImageSkeleton } from '@shared/ui/Skeleton'

import cls from './AppImage.module.scss'

type SourceProps = {
  srcSet: string
  media?: string // "(max-width: 768px)"
  type?: string // "image/webp"
}
interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  sources?: SourceProps[]
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
    local,
    ...otherProps
  } = props
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <div className={cls.wrapper}>
      {isLoading && (
        <ImageSkeleton
          className={classNames(cls.img, { [cls.active]: isLoading }, [className])}
          alt={alt}
          width={width}
          height={height}
        />
      )}

      {isError && (
        <img
          className={classNames(cls.img, { [cls.active]: isError }, [className])}
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
          className={classNames(cls.img, {}, [className])}
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
