import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm'
import cls from './LoginModal.module.scss'

export interface ILoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className = '', isOpen, onClose }: ILoginModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal
      lazy
      onClose={onClose}
      isOpen={isOpen}
      className={classNames(cls.LoginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  )
}
