import { classNames } from 'shared/lib'
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'

export interface IModalProps {
  className?: string
  isOpen?: boolean
  children?: ReactNode
  onClose?: () => void
}

const ANIMATION_DELAY = 100

export const Modal = ({ className = '', isOpen = false, children, onClose }: IModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
    [cls[theme]]: true,
  }

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)

      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler()
    }
  }, [onCloseHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current)
      }
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={onCloseHandler}>
          <div className={cls.content} onClick={onHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
