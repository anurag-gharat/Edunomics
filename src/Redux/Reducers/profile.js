import {GET_PROFILE,SET_LOADING,PROFILE_ERROR,GET_USER_RESUME,USER_RESUME_ERROR} from '../Constants'


const intialState={
    userProfile:{},
    isAdmin:false,
    loading:false,
    errors:[],
    userResume:null
}


export default function (state=intialState,action){

    const {type,payload}=action

    switch(type){
        case SET_LOADING :
            return{
                ...state,
                loading:true
            }
        case GET_PROFILE:
            return{
                ...state,
                userProfile:payload,
                isAdmin:false,
                loading:false,
                errors:[]
            }
        case GET_USER_RESUME:
            return{
                ...state,
                userProfile:payload,
                userResume:payload.resume,
                loading:false
            }
        case USER_RESUME_ERROR:
            return{
                ...state,
                loading:false,
                userResume:null,
                error:[payload],
                userProfile:{}
            }
        case PROFILE_ERROR:
            return{
                ...state,
                userProfile:{},
                isAdmin:false,
                loading:false,
                errors:[payload]
            }
        default :
        return{
            ...state
        }
    }


}
