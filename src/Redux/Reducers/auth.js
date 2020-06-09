import {LOGIN_FAILURE,LOGIN_SUCCESS,REGISTER_FAILURE,REGISTER_SUCCESS} from '../Constants'
 


const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    user:null,
    isloggedin:false,

}


export default function(state=initialState,action){
    
    const {type,payload}=action

    switch(type){
        // case USER_LOADED:
        //     return {
        //         ...state,
        //         isAuthenticated:true,
        //         loading:false,
        //         user:payload,
        //         isloggedin:true
        //     }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                token:payload.token,
                isloggedin:true
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isAuthenticated:false,
                loading:false,
                user:null,
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading:false
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                loading:false
            }
        default :
        return{
            ...state
        }
        }
        
    


}
