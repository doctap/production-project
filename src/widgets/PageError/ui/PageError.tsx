import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui'
import cls from './PageError.module.scss'

export const PageError = () => {
    const { t } = useTranslation()

    const reloadApp = () => {
        window.location.reload()
    }

    return (
        <div className={cls.PageError}>
            <div className={cls.content}>
                <h2>{t('page-error.title')}</h2>
                <Button onClick={reloadApp} theme={ButtonTheme.RELOAD}>
                    {t('page-error.button')}
                </Button>
            </div>
        </div>
    )
}
