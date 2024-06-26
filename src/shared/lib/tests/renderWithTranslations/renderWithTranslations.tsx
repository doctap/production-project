import { I18nextProvider } from 'react-i18next'
import type { ReactNode } from 'react'
import i18n from 'shared/config/i18n/i18n-configForTests'
import { render } from '@testing-library/react'

export const renderWithTranslations = (component: ReactNode) => render(
    <I18nextProvider i18n={i18n}>
        {component}
    </I18nextProvider>,
)
