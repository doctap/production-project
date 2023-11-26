import { classNames } from 'shared/lib'
import cls from './SideBar.module.scss'
import { useState } from 'react'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface ISideBarProps {
  className?: string
}

export const SideBar = ({ className = '' }: ISideBarProps) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.SideBar, [className], { [cls.collapsed]: collapsed })}
    >
      <button data-testid='sidebar-toggle' onClick={toggle}>toggle</button>

      <div className={cls.swithers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher} />
      </div>
    </div>
  )
}
