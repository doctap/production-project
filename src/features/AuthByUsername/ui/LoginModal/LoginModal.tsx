import { Loader, Modal } from 'shared/ui'
import { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

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
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
)
