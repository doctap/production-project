import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui'

export interface ILangSwitcherProps {
  className?: string,
  short?: boolean,
}

export const LangSwitcher = ({ className = '', short = false }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        (async () => {
            await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        })().then(a => {
            console.log(a)
        }).catch(e => { console.error(e) })
    }

    return (
        <Button
            onClick={toggle}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR_INVERTED}
        >
            {t(short ? 'lng-short' : 'lng')}
        </Button>
    )
}
