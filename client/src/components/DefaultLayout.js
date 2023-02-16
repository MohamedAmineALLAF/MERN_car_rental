import React from 'react';
import { Button, Dropdown, Space } from 'antd';

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Profile
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          My bookings
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" onClick={(()=>{
            localStorage.removeItem('user');
            window.location.href="/login";
        })}>
          Logout
        </a>
      ),
    },
  ];

  const user= JSON.parse(localStorage.getItem('user'));
  

function DefaultLayout(props) {
    return ( 
        <div>
            <div className='header'>
                <div className='d-flex justify-content-between border' style={{
                    padding:10,
                }}>
                    <h1>Rent car</h1>
                    <Space direction="vertical" style={{
                        marginRight:30
                    }}>
    <Space wrap>
      
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button>{user.username}</Button>
      </Dropdown>
      
    </Space>
    
  </Space>
                </div>
                <div className='content'>
                    {props.children}
                </div>
            </div>
        </div>
     )
}

export default DefaultLayout;