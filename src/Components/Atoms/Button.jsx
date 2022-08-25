import React from 'react'
import { styled, } from '@mui/system';

const Button = (props) => {
    const { value } = props
    const MyButton = styled('button')(() => ({
        color: 'white',
        backgroundColor: '#1976d2',
        padding: 5,
        borderRadius: 4,
        width: '100px',
        textAlign: 'center',
        margin: 10,
        border : 'none'
    }));
    return (
        <MyButton>{value}</MyButton>
    )
}

export default Button