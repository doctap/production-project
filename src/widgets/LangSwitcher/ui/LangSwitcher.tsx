import { classNames } from 'shared/lib'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';

export interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={toggle}
      className={classNames(cls.LangSwitcher, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {t('lng')}
    </Button>
  )
}