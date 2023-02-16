import { Button, Col, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner';
import { addCar,editCar,getAllCars } from '../redux/actions/carsActions';

function EditCar({match}) {

    const {cars} = useSelector(state=>state.carsReducer)
    const dispatch = useDispatch();
    const {loading} = useSelector(state=>state.alertsReducer)
    const [car, setcar] = useState()
    const [totalcars,settotalcars] = useState([])
    const {carid} = useParams();

    useEffect(()=>{
        if(cars.length == 0){
            dispatch(getAllCars())
        }else{
            settotalcars(cars)
            setcar(cars.find((o)=> o._id == carid ));
            console.log(car);
        }
    },[cars])

    const onFinish = (values) => {
        values._id = car._id

        dispatch(editCar(values))

        console.log('Success:', values);
      };

    return (
        <DefaultLayout>
            {loading && (<Spinner/>)}
            <Row justify='center mt-5'>
                <Col lg={12} sm={24}>
                 {
                    totalcars.length>0 && (
                        <Form
                        initialValues={car}
                        className='p-2'
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <h1>Edit car</h1>
                        <h5>{car.name}</h5>
                        <Form.Item
                            label="Car name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the car name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Image URL"
                            name="image"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the image!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Tarif par jour"
                            name="rentPerHour"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the tarif!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Capacité"
                            name="capacity"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the capacity!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Fuel Type"
                            name="fuelType"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the fuel type!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            
                        >
                            <div className='text-right'>
                            <Button type="primary" htmlType="submit">
                               Edit car
                            </Button>
                            </div>
                            
                        </Form.Item>
                    </Form>
                    )
                 }   
                </Col>
            </Row>
        </DefaultLayout>
    );
}

export default EditCar

