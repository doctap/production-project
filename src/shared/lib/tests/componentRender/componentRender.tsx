import { I18nextProvider } from 'react-i18next'
import type { ReactNode } from 'react'
import i18n from 'shared/config/i18n/i18n-configForTests'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'

export interface IComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<IStateSchema>
}

export const ComponentRender = (component: ReactNode, options: IComponentRenderOptions = {}) => {
    const { route = '/', initialState } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    )
}
