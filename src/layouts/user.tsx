import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const User_layout = (props: Props) => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default User_layout