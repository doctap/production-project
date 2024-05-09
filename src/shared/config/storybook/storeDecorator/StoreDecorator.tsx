import { DeepPartial } from '@reduxjs/toolkit'
import type { Story } from '@storybook/react'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (state: DeepPartial<IStateSchema>) => (Story: Story) => (
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
)
