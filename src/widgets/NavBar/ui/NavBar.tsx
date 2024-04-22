import { useState } from 'react'
import { classNames } from 'shared/lib'
import { Button, ButtonTheme, Modal } from 'shared/ui'
import { LoginModal } from 'features/AuthByUsername'
import { useTranslation } from 'react-i18next'
import cls from './NavBar.module.scss'

export interface INavBarProps {
  className?: string
}

export const NavBar = ({ className = '' }: INavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onModalToggle = () => {
    setIsAuthModal(prev => !prev)
  }

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onModalToggle}
      />
      <Button
        className={cls.loginButton}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onModalToggle}
      >
        {t('buttons.login')}
      </Button>
    </div>
  )
}
