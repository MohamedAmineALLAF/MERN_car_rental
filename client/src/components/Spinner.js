import React, { Component } from 'react';
import { Spin } from 'antd';

function Spinner() {
    return (
        <div className='spinner'>
            <Spin size='large'/>
        </div>
     );
}

export default Spinner;