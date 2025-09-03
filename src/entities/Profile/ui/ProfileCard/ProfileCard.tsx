import { memo } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Avatar, Input, Loader, Text, TextTheme } from 'shared/ui'
import { Profile } from 'entities/Profile'
import { AlignMode } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { Currency, CurrencySelect } from 'entities/Currency'
import { CountrySelect, Country } from 'entities/Country'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import cls from './ProfileCard.module.scss'

export interface IProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    onChangeFirstname?: (value: string) => void
    onChangeLastname?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency: (currency: Currency) => void
    onChangeCountry: (country: Country) => void
}

export const ProfileCard = memo(({
    className = '',
    data,
    error,
    isLoading,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: IProfileCardProps) => {
    const { t } = useTranslation('profile')
    const readonly = useSelector(getProfileReadonly)

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.loading, className])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.error, className])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('error-profile-title')}
                    text={t('error-profile-text')}
                    align={AlignMode.CENTER}
                />
            </div>
        )
    }

    const mods = {
        [cls.editing]: !readonly,
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.profileData}>
                {data?.avatar && (
                    <div className={cls.avatarWrap}>
                        <Avatar src={data?.avatar} alt="Avatar" size={150} />
                    </div>
                )}

                <Input
                    value={data?.firstName}
                    placeholder={t('ph-firstName')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('ph-lastName')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />

                <Input
                    value={data?.age}
                    placeholder={t('ph-age')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('ph-city')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

                <Input
                    value={data?.username}
                    placeholder={t('ph-username')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('ph-avatar')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />

                <CurrencySelect
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    readonly={readonly}
                />

                <CountrySelect
                    onChange={onChangeCountry}
                    value={data?.country}
                    readonly={readonly}
                />
            </div>
        </div>
    )
})
