import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getPost } from '../../Redux/Actions/postActions'
import Card from '../Molecules/Card';
import { useDispatch } from 'react-redux'
import {action} from '../../Redux/index'
const Home = () => {
  const dispatch = useDispatch()
  const {posts} = useSelector(state => state.post)
  console.log(posts)
  return (
    <>
    <button onClick={()=>{dispatch(action.getPost())}}>hello</button>
    
    <div style={{width : '90%' , margin : 'auto'}}>

    {posts.map((post)=>(
        <div key={post.id} style={{display : 'inline-block'}}>
        <Card post={post} />
        </div>
    ))}
    </div>
    </>
  )
}

export default Home