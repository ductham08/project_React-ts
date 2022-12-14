import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Setting_layout = (props: Props) => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default Setting_layout