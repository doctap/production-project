import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import type { Story } from '@storybook/react'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  loginForm: loginReducer,
}

export const StoreDecorator = (
  state: DeepPartial<IStateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>,
) => (Story: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
)
