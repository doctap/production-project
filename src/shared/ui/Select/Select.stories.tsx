import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Your select',
    options: [
        {
            content: 'value 1',
            value: 'value-1',
        },
        {
            content: 'value 2',
            value: 'value-2',
        },
    ],
}
