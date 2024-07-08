import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator'
import ProfilePage from './ProfilePage'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

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
