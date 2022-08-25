import { GET_POSTS } from '../Actions/types'

const initialState = {
    posts : [],
}

export default  (state = initialState , action) =>{
    const { type, payload } = action;
    switch(type){
        case GET_POSTS :
            
            return  {
                posts : payload
            }
            
        default :
        return state
    }
}