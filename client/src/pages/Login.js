import React from 'react';
import { Row, Col,Form,Input, Button, Anchor } from 'antd';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';




function Login(){
        const dispatch = useDispatch();

    
        function onFinish(values){
            dispatch(userLogin(values));
            console.log(values);
        }

    return(
        <div  >
            <Row  gutter={16} style={{
                marginTop:100
            }}>
                <Col lg={8}></Col>
                <Col lg={8} className='login'>
                <Form layout="vertical" onFinish={onFinish}>
                <h1>Login</h1>
                <hr />
                <Form.Item name='username' label='Username' rules={[{required: true}]}>
                <Input/>
                </Form.Item>
                <Form.Item name='password' label='Password' rules={[{required: true}]}>
                <Input/>
                </Form.Item>
                <button type="primary">Login</button>
                <br>
                </br>
                <Anchor
                    items={[
                    {
                        key: 'register',
                        href: '/register',
                        title: 'Click here to register',
                    }
                    ]}
                />
                </Form>
                </Col>
           
            </Row>
        </div>
    )
}

export default Login;