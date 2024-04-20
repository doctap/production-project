import { fireEvent, screen } from '@testing-library/react'
import { Counter } from 'entities/Counter/index'
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Counter test', () => {
  test('check counter value', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10} }
    })

    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  test('Counter increment', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10} }
    })

    const increment = screen.getByTestId('counter-increment')
    expect(increment).toBeInTheDocument()
    fireEvent.click(increment)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })

  test('Counter decrement', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10} }
    })

    const decrement = screen.getByTestId('counter-decrement')
    expect(decrement).toBeInTheDocument()
    fireEvent.click(decrement)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })
})
