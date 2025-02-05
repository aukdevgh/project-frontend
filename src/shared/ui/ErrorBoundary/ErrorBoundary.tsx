import { Component, ErrorInfo, ReactNode } from 'react'

import cls from './ErrorBoundary.module.scss'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { Headling } from '../Headling/Headling'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false })
    location.reload()
  }

  render() {
    const { hasError } = this.state
    const { children, fallback } = this.props

    if (hasError) {
      return (
        fallback || (
          <Container className={cls.container}>
            <Headling as="h2">Something went wrong.</Headling>
            <Button onClick={this.handleReset}>Try again</Button>
          </Container>
        )
      )
    }

    return children
  }
}
