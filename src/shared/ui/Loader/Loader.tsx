import { memo } from 'react'
import './Loader.scss'

export const Loader = memo(() => (
    <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
    </div>
))
