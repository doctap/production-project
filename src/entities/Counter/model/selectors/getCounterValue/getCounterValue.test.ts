import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test', () => {
  const state: DeepPartial<IStateSchema> = {
    counter: {value: 10}
  } 
  test('get value', () => {
    expect(getCounterValue(state as IStateSchema)).toEqual(10)
  })
})