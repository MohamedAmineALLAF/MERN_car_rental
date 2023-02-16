import { message } from "antd";
import axios from "axios";


export const userLogin = (reqobj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('http://localhost:5000/api/users/login', reqobj)
        localStorage.setItem('user', JSON.stringify(response.data))
        
        dispatch({ type: 'LOADING', payload: false })
        message.success('login successfull')
        setTimeout (()=>{
            
            window.location.href='/'
        },50)
    } catch (error) {
        console.log(error)
        message.error('error'+error)
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const userRegister = (reqobj) => async dispatch=> {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('http://localhost:5000/api/users/register', reqobj)
        dispatch({ type: 'LOADING', payload: false })
        message.success('Registration successfull')
        setTimeout (()=>{
            
            window.location.href='/login'
        },50)
} catch (error) {
        {
            console.log(error)
            message.error('Something went wrong')
            dispatch({ type: 'LOADING', payload: false })
}
    }
}