import  axios  from "axios";
import { GET_POSTS } from './types'

export const getPost = () => async (dispatch)=>{
      const res =  await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type : GET_POSTS,
            payload: res.data
        })
}

