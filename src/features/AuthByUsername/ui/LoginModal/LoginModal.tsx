import { Modal } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm'

export interface ILoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className = '', isOpen, onClose }: ILoginModalProps) => (
  <Modal
    lazy
    onClose={onClose}
    isOpen={isOpen}
    className={className}
  >
    <LoginForm />
  </Modal>
)
