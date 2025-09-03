import { useCallback } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui'
import { Country } from '../../model/types/country'

export interface CountrySelectProps {
    className?: string
    onChange: (value: Country) => void
    value?: Country
    readonly?: boolean
}

const options = [
    { content: Country.Canada, value: Country.Canada },
    { content: Country.Russia, value: Country.Russia },
    { content: Country.UK, value: Country.UK },
]

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className = '',
        onChange,
        value,
        readonly,
    } = props
    const { t } = useTranslation()

    const handleSelectChange = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            readonly={readonly}
            className={classNames('', {}, [className])}
            onChange={handleSelectChange}
            label={t('select-country')}
            value={value ?? ''}
            options={options}
        />
    )
}
