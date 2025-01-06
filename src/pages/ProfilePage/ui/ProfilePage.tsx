import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from 'entities/Profile'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducerList, useAppDispatch } from 'shared/lib'

const reducersList: ReducerList = {
    profile: profileReducer,
}

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile')

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducersList} removeUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
