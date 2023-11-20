import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslations } from 'shared/lib'

describe('SideBar test', () => {
  test('check sidebar in the document', () => {
    renderWithTranslations(<SideBar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('check sidebar opening', () => {
    renderWithTranslations(<SideBar />)

    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()

    const toggle = screen.getByTestId('sidebar-toggle')
    expect(toggle).toBeInTheDocument()

    expect(sidebar).toHaveClass('SideBar', 'collapsed')
    fireEvent.click(toggle)
    expect(sidebar).toHaveClass('SideBar')
  })
})
