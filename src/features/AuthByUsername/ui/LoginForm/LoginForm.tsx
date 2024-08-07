import { useCallback } from 'react'
import {
    classNames,
    DynamicModuleLoader,
    ReducerList,
    useAppDispatch,
} from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui'
import { useSelector } from 'react-redux'
import { loginAction, loginReducer } from '../../model/slice/loginSlice'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUserName } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import cls from './LoginForm.module.scss'

export interface ILoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
}

const LoginForm = ({ className = '', onSuccess }: ILoginFormProps) => {
    const { t } = useTranslation()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginLoading)
    const error = useSelector(getLoginError)

    const dispatch = useAppDispatch()

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginAction.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginAction.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const { meta } = await dispatch(loginByUserName({ username, password }))
        if (meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch, username, password])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('titles.loginForm')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    autoFocus
                    value={username}
                    onChange={onChangeUsername}
                    placeholder={t('inputLabels.username')}
                />
                <Input
                    value={password}
                    onChange={onChangePassword}
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
        </DynamicModuleLoader>
    )
}

export default LoginForm
