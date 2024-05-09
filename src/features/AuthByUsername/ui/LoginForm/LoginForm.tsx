import { useCallback } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUserName } from '../../model/services/loginByUsername/loginByUsername'
import cls from './LoginForm.module.scss'

export interface ILoginFormProps {
  className?: string
}

export const LoginForm = ({ className = '' }: ILoginFormProps) => {
  const { t } = useTranslation()

  const { username, password, error, isLoading } = useSelector(getLoginState)
  const dispatch = useDispatch()

  const setUsername = useCallback((value: string) => {
    dispatch(loginAction.setUsername(value))
  }, [dispatch])

  const setPassword = useCallback((value: string) => {
    dispatch(loginAction.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('titles.loginForm')} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        value={username}
        onChange={setUsername}
        placeholder={t('inputLabels.username')}
      />
      <Input
        value={password}
        onChange={setPassword}
        placeholder={t('inputLabels.password')}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('buttons.login')}
      </Button>
    </div>
  )
}
