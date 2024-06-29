import React, { type ErrorInfo, type ReactNode } from 'react'
import { PageError } from 'widgets/PageError'

interface IErrorBoundaryProps {
  children: ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.error(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        // Можно отрендерить запасной UI произвольного вида
        return hasError ? <PageError /> : children
    }
}
