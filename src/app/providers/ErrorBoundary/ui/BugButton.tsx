import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui'
import { useEffect, useState } from 'react'

export const BugButton = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)

  const errorInit = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      onClick={errorInit}
      theme={ButtonTheme.CLEAR}
    >
      {t('bug-button')}
    </Button>
  )
}
