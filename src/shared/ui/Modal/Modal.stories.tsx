import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const ModalLight = Template.bind({})
ModalLight.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit earum accusamus illo deserunt porro id sed, asperiores alias. Expedita sit facilis omnis commodi laboriosam quisquam, a assumenda id voluptatibus.',
}

export const ModalDark = Template.bind({})
ModalDark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit earum accusamus illo deserunt porro id sed, asperiores alias. Expedita sit facilis omnis commodi laboriosam quisquam, a assumenda id voluptatibus.',
}

ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
