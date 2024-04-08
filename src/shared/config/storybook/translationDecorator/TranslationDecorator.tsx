import { Story } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18n, { initI18nextTest } from 'shared/config/i18n/i18n-configForTests'

export const TranslationDecorator = (Story: Story) => (
  (initI18nextTest(),
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  )
)
