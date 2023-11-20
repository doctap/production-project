import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('Button test', () => {
  test('check button in the document', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('check class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
