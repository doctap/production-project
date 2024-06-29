import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextTheme } from './Text'
import { ThemeDecorator } from '../../config/storybook/themeDecorator/ThemeDecorator'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, recusandae!',
    title: 'Minima, recusandae!',
}

export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, recusandae!',
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'Minima, recusandae!',
}

export const Error = Template.bind({})
Error.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, recusandae!',
    title: 'Minima, recusandae!',
    theme: TextTheme.ERROR,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, recusandae!',
    title: 'Minima, recusandae!',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, recusandae!',
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'Minima, recusandae!',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorDark = Template.bind({})
ErrorDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, recusandae!',
    title: 'Minima, recusandae!',
    theme: TextTheme.ERROR,
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
