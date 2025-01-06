import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Input, Text } from 'shared/ui'
import { useSelector } from 'react-redux'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import cls from './ProfileCard.module.scss'

export interface IProfileCardProps {
  className?: string
}

export const ProfileCard = (props: IProfileCardProps) => {
    const {
        className = '',
    } = props

    const { t } = useTranslation('profile')
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)
    const data = useSelector(getProfileData)

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('profile')} />

                <Button theme={ButtonTheme.OUTLINE}>
                    {t('editBtn')}
                </Button>
            </div>

            <div className={cls.profileData}>
                <Input
                    value={data?.firstName}
                    placeholder={t('ph-firstName')}
                    onChange={() => 0}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('ph-lastName')}
                    onChange={() => 0}
                />
            </div>
        </div>
    )
}
