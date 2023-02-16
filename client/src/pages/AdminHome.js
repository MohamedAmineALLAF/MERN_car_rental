import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import {useDispatch, useSelector} from 'react-redux'
import { getAllCars,deleteCar } from '../redux/actions/carsActions';
import { Col, DatePicker, Row ,Card, Button, Popconfirm} from 'antd';
import Spinner from '../components/Spinner';
import {DeleteFilled, EditOutlined, QuestionCircleOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
const {Meta} = Card;

function AdminHome(){
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalCars, setTotalCars] = useState([])
    const { RangePicker } = DatePicker;
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllCars())
    },[])

    useEffect(()=>{
        setTotalCars(cars)
    },[cars])

    function setFilter(values){

    }

    return(
        
        <DefaultLayout>


            {loading === true && <Spinner/>}
           
           <Row justify='center'>
            {cars.map(car=>{
            return <Col lg={5} sm={24} xs={24} style={{
                padding:5,
                margin:5
            }}>
            <Card
                    hoverable
                    style={{
                    width: 240,
                    
                    }}
                    cover={<img alt="example" src={car.image} className="card-img"/>}
                >
                <Meta title={car.name} description={car.rentPerHour} />
                <div style={{
                    padding:5,
                    marginTop:10,
                }}>

                <Popconfirm
                    title="Delete the car"
                    description="Are you sure to delete this car?"
                    onConfirm={((carid)=>{
                        dispatch(deleteCar({carid:car._id}))
                    })}
                    icon={
                    <QuestionCircleOutlined
                        style={{
                        color: 'red',
                        }}
                    />
                    }
                >
                    <DeleteFilled className='p-3' style={{
                                            color:'red',
                                            cursor: 'pointer'
                                        }} />
                </Popconfirm>
                    
                    <Link to={`/editcar/${car._id}`}>
                    <EditOutlined  className='p-3' style={{
                        color:'blue',
                        cursor: 'pointer'
                    }}/>
                    </Link>
                    
                </div>
               
            </Card>
            </Col>
                })}
            </Row>
        </DefaultLayout>
       
    )
}

export default AdminHome;