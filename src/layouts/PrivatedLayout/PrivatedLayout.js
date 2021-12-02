import React from 'react'
import { Outlet } from 'react-router'

const PrivatedLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PrivatedLayout
