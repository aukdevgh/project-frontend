import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'

// import cls from './Brands.module.scss'

interface BrandsProps {
  className?: string
}

const Brands: FC<BrandsProps> = ({ className }) => {
  return <div className={classNames('', {}, [className])}>brands</div>
}

export default Brands
