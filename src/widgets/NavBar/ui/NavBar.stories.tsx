import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from './NavBar';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'widget/NavBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)]
