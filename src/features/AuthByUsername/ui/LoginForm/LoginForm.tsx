import { useState } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Input } from 'shared/ui'
import cls from './LoginForm.module.scss'

export interface ILoginFormProps {
  className?: string
}

export const LoginForm = ({ className = '' }: ILoginFormProps) => {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
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
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
        {t('buttons.login')}
      </Button>
    </div>
  )
}
