import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import b from './hello.js';
// b()

import './main.css';
import './main.less'
import img from '../img_0030.jpg';

let a = <div>
  <p>2dsfsd3211</p>
  {/* <Img style={{width:'100px',height:'122px'}}/> */}
</div>

ReactDOM.render(<div className='box'>
  <h1>DeatAugust</h1>
  <img src={img} />
</div>,document.getElementById('root'))
