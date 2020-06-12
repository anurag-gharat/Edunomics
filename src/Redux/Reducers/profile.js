import {GET_PROFILE,SET_LOADING,PROFILE_ERROR} from '../Constants'


const intialState={
    userProfile:{},
    isAdmin:false,
    loading:false,
    errors:[]
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
                userProfile:payload,
                isAdmin:false,
                loading:false,
                errors:[]
            }
        case PROFILE_ERROR:
            return{
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
