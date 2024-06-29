import { useCallback, useState } from 'react'
import { classNames } from 'shared/lib'
import { Button, ButtonTheme } from 'shared/ui'
import { LoginModal } from 'features/AuthByUsername'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { userAction, getUserAuthData } from 'entities/User'
import cls from './NavBar.module.scss'

export interface INavBarProps {
  className?: string
}

export const NavBar = ({ className = '' }: INavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const userAuth = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onModalToggle = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userAction.logout())
  }, [dispatch])

  return userAuth ? (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Button
        className={cls.loginButton}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onLogout}
      >
        {t('buttons.logout')}
      </Button>
    </div>
  ) : (
    <div className={classNames(cls.NavBar, {}, [className])}>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onModalToggle}
        />
      )}
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
