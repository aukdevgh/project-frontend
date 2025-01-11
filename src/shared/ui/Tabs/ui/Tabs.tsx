import { FC, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Button } from '@shared/ui/Button'

import cls from './Tabs.module.scss'

export type Tab = {
  label: string
  content: React.ReactNode
}

type TabsProps = {
  className?: string
  tabs: Tab[]
}

export const Tabs: FC<TabsProps> = ({ className, tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={classNames(cls.container, {}, [className])}>
      <ul className={cls.list}>
        {tabs.map((tab, index) => (
          <li className={classNames(cls.tab, { [cls.active]: activeTab === index }, [])} key={index}>
            <Button className={cls.btn} variant="clear" onClick={() => setActiveTab(index)}>
              {tab.label}
            </Button>
          </li>
        ))}
      </ul>
      <div className={cls.content}>{tabs[activeTab].content}</div>
    </div>
  )
}
