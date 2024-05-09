import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator'
import { LoginForm } from './LoginForm'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({ loginForm: { username: 'qwe', password: '123' } })]

export const IsLoading = Template.bind({})
IsLoading.args = {}
IsLoading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [StoreDecorator({ loginForm: { error: 'Error' } })]
