import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'
import HakerImg from './haker.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: HakerImg,
    size: 150,
    alt: 'AvatarStory',
}

export const Small = Template.bind({})
Small.args = {
    src: HakerImg,
    size: 50,
    alt: 'AvatarStory',
}
