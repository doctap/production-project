import { I18nextProvider } from 'react-i18next'
import type { ReactNode } from 'react'
import i18n from 'shared/config/i18n/i18n-configForTests'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export interface IComponentRenderOptions {
  route?: string
}

export const ComponentRender = (component: ReactNode, options: IComponentRenderOptions = {}) => {
  const { route = '/' } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  )
}
