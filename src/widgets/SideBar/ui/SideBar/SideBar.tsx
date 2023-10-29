import { classNames } from 'shared/lib'
import cls from './SideBar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui'

interface ISideBarProps {
  className?: string
}

export const SideBar = ({ className }: ISideBarProps) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={classNames(cls.SideBar, [className], { [cls.collapsed]: collapsed })}>
      <button onClick={toggle}>toggle</button>

      <div className={cls.swithers}>
        <ThemeSwitcher />
        {/* LangSwitcher */}
      </div>
    </div>
  )
}
