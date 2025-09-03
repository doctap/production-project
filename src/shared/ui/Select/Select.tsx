import { classNames, Mods } from 'shared/lib'
import { ChangeEvent, memo, useMemo } from 'react'
import cls from './Select.module.scss'

interface OptionItem {
    content: string
    value: string
}

export interface SelectProps {
    className?: string
    label?: string
    options: OptionItem[]
    value?: string
    onChange: (value: string) => void
    readonly?: boolean
}

export const Select = memo(({
    className = '',
    label,
    options,
    value,
    onChange,
    readonly,
}: SelectProps) => {
    const optionList = useMemo(() => options.map(opt => (
        <option key={opt.value} className={cls.option} value={opt.value}>{opt.content}</option>
    )), [options])

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
    }

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {!!label && (
                <span className={cls.label}>{`${label}>`}</span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={handleSelectChange}
            >
                {optionList}
            </select>
        </div>
    )
})
