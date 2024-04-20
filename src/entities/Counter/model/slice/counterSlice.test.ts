import { ICounterSchema } from '../types/CounterSchema'
import { counterAction, counterReducer } from './counterSlice'

describe('counterSlice.test', () => {
  const state: ICounterSchema = {
    value: 10
  }
  test('increment', () => {
    expect(
      counterReducer(state, counterAction.increment)
    ).toEqual({value: 11})
  })
  test('decrement', () => {
    expect(
      counterReducer(state, counterAction.decrement)
    ).toEqual({value: 9})
  })
  test('should be work with empty state', () => {
    expect(
      counterReducer(undefined, counterAction.decrement)
    ).toEqual({value: -1})
  })
})