import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { CurrencySelect } from './CurrencySelect'

export default {
    title: 'entity/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = args => <CurrencySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}
