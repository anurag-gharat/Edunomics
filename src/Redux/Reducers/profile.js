import {GET_PROFILE,SET_LOADING} from '../Constants'


const intialState={
    userProfile:null,
    isAdmin:false,
    loading:true,
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

        default :
        return{
            ...state
        }
    }


}
