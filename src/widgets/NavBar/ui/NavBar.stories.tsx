import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator'
import { NavBar } from './NavBar'

export default {
    title: 'widget/NavBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = args => <NavBar {...args} />

const commonDecoratorsLogIn = [
    StoreDecorator({ user: { userAuth: { id: 1, username: 'username' } } }),
]

const commonDecoratorsLogout = [
    StoreDecorator({ user: undefined }),
]

export const Light = Template.bind({})
Light.args = {}
Light.decorators = commonDecoratorsLogout

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), ...commonDecoratorsLogIn]

export const LogIn = Template.bind({})
LogIn.args = {}
LogIn.decorators = commonDecoratorsLogout

export const Logout = Template.bind({})
Logout.args = {}
Logout.decorators = commonDecoratorsLogIn
