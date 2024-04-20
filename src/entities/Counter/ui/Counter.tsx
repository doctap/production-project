import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { counterAction } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const value = useSelector(getCounterValue)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const increment = () => {
    dispatch(counterAction.increment())
  }

  const decrement = () => {
    dispatch(counterAction.decrement())
  }

  return (
    <div>
      <h1
        data-testid="counter-value"
      >
        {value}
      </h1>
      <button
        data-testid="counter-increment"
        onClick={increment}
        type="button"
      >
        {t('increment')}
      </button>

      <button
        data-testid="counter-decrement"
        onClick={decrement}
        type="button"
      >
        {t('decrement')}
      </button>
    </div>
  )
}
