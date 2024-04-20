import { useState } from 'react'
import { classNames } from 'shared/lib'
import { Button, ButtonTheme, Modal } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import cls from './NavBar.module.scss'

export interface INavBarProps {
  className?: string
}

export const NavBar = ({ className = '' }: INavBarProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {t('lorem')}
      </Modal>
      <Button
        className={cls.loginButton}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={() => setIsOpen(true)}
      >
        {t('buttons.login')}
      </Button>
    </div>
  )
}
