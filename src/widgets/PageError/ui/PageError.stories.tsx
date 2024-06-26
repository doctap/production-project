import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageError } from './PageError'

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = () => <PageError />

export const ErrorPage = Template.bind({})
ErrorPage.args = {}
