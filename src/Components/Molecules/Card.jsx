import React from 'react'
import { styled, } from '@mui/system';
import Button from '../Atoms/Button';


const Wrapper = styled('div')(()=>({
    padding : '0.5rem',
    width : '345px',
    border : '1px solid black',
    margin : '2rem'
}))

const Cardcontent = styled('div')(()=>({
    padding : '0.5rem',
    width : '345px'
}))

const Title = styled('h2')(()=>({
   fontSize : '30px',
   margin : '10px 20px'

}))

const Para = styled('p')(()=>({
    fontSize : '15px',
    margin : '10px 20px'

 
 }))

 const CardItems = styled('div')(()=>({
    padding : '0.5rem'
 }))



 
const Card = (props) => {
    const { post } = props
  return (
    <>
    <Wrapper>
        <Cardcontent>
            <Title>{post.title}</Title>
            <Para>{post.body}</Para>
        </Cardcontent>
        <CardItems>
            <Button value={'Edit Post'}/>
        </CardItems>
    </Wrapper>

    </>
  )
}

export default Card