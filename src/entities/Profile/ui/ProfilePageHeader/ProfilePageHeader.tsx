import { useCallback } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Text } from 'shared/ui'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileAction } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import cls from './ProfilePageHeader.module.scss'

export interface IProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = (props: IProfilePageHeaderProps) => {
    const {
        className = '',
    } = props

    const { t } = useTranslation('profile')
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(
        () => {
            dispatch(profileAction.setReadonly(false))
        },
        [dispatch],
    )

    const onCancelEditing = useCallback(
        () => {
            dispatch(profileAction.cancelEditingProfile())
            dispatch(profileAction.setReadonly(true))
        },
        [dispatch],
    )

    const onSave = useCallback(
        () => {
            dispatch(updateProfileData())
            dispatch(profileAction.setReadonly(true))
        },
        [dispatch],
    )

    const buttons = readonly ? (
        <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onEdit}
        >
            {t('editBtn')}
        </Button>
    ) : (
        <>
            <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancelEditing}
            >
                {t('cancelEditingBtn')}
            </Button>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSave}
            >
                {t('saveBtn')}
            </Button>
        </>
    )

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile-title')} />
            <div className={cls.buttons}>
                {buttons}
            </div>
        </div>
    )
}
