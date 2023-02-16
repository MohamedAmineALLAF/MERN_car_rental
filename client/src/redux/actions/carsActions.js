import { message } from 'antd';
import axios from 'axios';


export const getAllCars=()=>async dispatch=>{

    dispatch({type: 'LOADING', payload:true})
        try {
        const response = await axios.get('http://localhost:5000/api/cars/getallcars')
        dispatch({type: 'GET_ALL_CARS', payload:response.data})
        dispatch({type: 'LOADING', payload:false})
        
        } catch (error){
            console.log(error);
            dispatch({type: 'LOADING', payload:false})
        }



    }
 
    export const addCar=(reqObj)=>async dispatch=>{

        dispatch({type: 'LOADING', payload:true})
            try {
            const response = await axios.post('http://localhost:5000/api/cars/addcar',reqObj)
            
            dispatch({type: 'LOADING', payload:false})
            message.success('New car added successfully')
            setTimeout(()=>{
                window.location.href='/admin'
            },200)
            
            } catch (error){
                console.log(error);
                dispatch({type: 'LOADING', payload:false})
            }
    
    }

    export const editCar=(reqObj)=>async dispatch=>{

        dispatch({type: 'LOADING', payload:true})
            try {
            const response = await axios.post('http://localhost:5000/api/cars/editcar',reqObj)
            
            dispatch({type: 'LOADING', payload:false})
            message.success('Car details updated successfully')
            setTimeout(()=>{
                window.location.href='/admin'
            },200)
            
            } catch (error){
                console.log(error);
                dispatch({type: 'LOADING', payload:false})
            }
    
    }

    export const deleteCar=(reqObj)=>async dispatch=>{

        dispatch({type: 'LOADING', payload:true})
            try {
            const response = await axios.post('http://localhost:5000/api/cars/deletecar',reqObj)
            
            dispatch({type: 'LOADING', payload:false})
            message.success('Car deleted successfully')
            setTimeout(()=>{
                window.location.reload()
            },200)
            
            } catch (error){
                console.log(error);
                dispatch({type: 'LOADING', payload:false})
            }
    
    }
