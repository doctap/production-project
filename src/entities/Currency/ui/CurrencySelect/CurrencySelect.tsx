import { useCallback } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui'
import { Currency } from '../../model/types/currency'

export interface CurrencySelectProps {
    className?: string
    onChange: (value: Currency) => void
    value?: Currency
    readonly?: boolean
}

const options = [
    { content: Currency.RUB, value: Currency.RUB },
    { content: Currency.EUR, value: Currency.EUR },
    { content: Currency.USD, value: Currency.USD },
]

export const CurrencySelect = (props: CurrencySelectProps) => {
    const {
        className = '',
        onChange,
        value,
        readonly,
    } = props
    const { t } = useTranslation()

    const handleSelectChange = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select
            readonly={readonly}
            className={classNames('', {}, [className])}
            onChange={handleSelectChange}
            label={t('select-currency')}
            value={value ?? ''}
            options={options}
        />
    )
}
