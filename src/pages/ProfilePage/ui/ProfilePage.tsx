import {
    fetchProfileData,
    getProfileFormData,
    getProfileError,
    getProfileLoading,
    ProfileCard,
    ProfilePageHeader,
    profileReducer,
    profileAction,
} from 'entities/Profile'
import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducerList, useAppDispatch } from 'shared/lib'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import cls from './ProfilePage.module.scss'

const reducersList: ReducerList = {
    profile: profileReducer,
}

const ProfilePage = memo(() => {
    const dispatch = useAppDispatch()

    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)
    const formData = useSelector(getProfileFormData)

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileAction.editProfile({ firstName: value }))
        },
        [dispatch],
    )

    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileAction.editProfile({ lastName: value }))
        },
        [dispatch],
    )

    const onChangeAge = useCallback(
        (value: string) => {
            const isDigit = /^\d+$/.test(value)

            if (isDigit) {
                dispatch(profileAction.editProfile({ age: Number(value ?? 0) }))
            }
        },
        [dispatch],
    )

    const onChangeCity = useCallback(
        (city: string) => {
            dispatch(profileAction.editProfile({ city }))
        },
        [dispatch],
    )

    const onChangeUsername = useCallback(
        (username: string) => {
            dispatch(profileAction.editProfile({ username }))
        },
        [dispatch],
    )

    const onChangeAvatar = useCallback(
        (avatar: string) => {
            dispatch(profileAction.editProfile({ avatar }))
        },
        [dispatch],
    )

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileAction.editProfile({ currency }))
        },
        [dispatch],
    )

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileAction.editProfile({ country }))
        },
        [dispatch],
    )

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducersList} removeUnmount>
            <ProfilePageHeader className={cls.header} />
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
