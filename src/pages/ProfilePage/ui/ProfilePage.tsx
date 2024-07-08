import { profileReducer } from 'entities/Profile'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducerList } from 'shared/lib'

const reducersList: ReducerList = {
    profile: profileReducer,
}

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile')

    return (
        <DynamicModuleLoader reducers={reducersList} removeUnmount>
            <div>{t('title')}</div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
