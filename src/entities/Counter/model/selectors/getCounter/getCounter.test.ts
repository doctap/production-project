import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter.test', () => {
  const state: DeepPartial<IStateSchema> = {
    counter: {value: 10}
  } 
  test('get counter', () => {
    expect(getCounter(state as IStateSchema)).toEqual({value: 10})
  })
})