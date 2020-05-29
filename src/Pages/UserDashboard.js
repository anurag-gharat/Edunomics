import React from 'react'
import Alphabot from '../User/Components/Alphabot'
import Heading from '../Components/Heading'

export default function UserDashboard() {
    return (
        <div className="container p-t-100 h-100">
            <div className="container">
                <Heading title="User Dashboard" />
            </div>
            <Alphabot />
        </div>
    )
}
