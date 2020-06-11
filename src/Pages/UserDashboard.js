import React, { useEffect } from 'react'
import Alphabot from '../User/Components/Alphabot'
import Heading from '../Components/Heading'
import {connect} from 'react-redux'
import {getProfile} from '../Redux/Actions/profile'


const UserDashboard=({getProfile,userProfile,loading})=> {

    useEffect(()=>{
        getProfile()
    },[])
    
    return (
        <div className="container p-t-100 h-100">
            <div className="container">
                <Heading title="User Dashboard" />
            </div>
            <Alphabot />
        </div>
    )
}

const mapStateToProps=(state)=>({
    userProfile:state.profile.userProfile,
    loading:state.profile.loading
})

export default connect(mapStateToProps,{getProfile})(UserDashboard)