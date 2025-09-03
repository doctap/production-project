import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

export interface IProfile {
    firstName: string
    lastName: string
    age: number
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
}

export type Profile = Partial<IProfile>

export interface IProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
