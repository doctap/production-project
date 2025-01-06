import { classNames } from 'shared/lib'
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import cls from './Input.module.scss'

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface IInputProps extends InputHTMLProps {
  className?: string
  value?: string
  onChange: (value: string) => void
  autoFocus?: boolean
}

export const Input = memo((props: IInputProps) => {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus = false,
        ...otherProps
    } = props

    const [isFocus, setIsFocus] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    const onFocus = () => {
        setIsFocus(true)
    }

    const onBlur = () => {
        setIsFocus(false)
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true)
            inputRef.current?.focus()
        }
    }, [autoFocus])

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    onChange={onChangeHandler}
                    value={value}
                    className={cls.Input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocus && (
                    <span
                        style={{ left: `${caretPosition * 9}px` }}
                        className={cls.caret}
                    />
                )}
            </div>
        </div>
    )
})
