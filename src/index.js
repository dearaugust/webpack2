import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import './main.less'
import Img from '../img_0030.jpg';
let a = <div>
  <p>2dsfsd3211</p>
  {/* <Img style={{width:'100px',height:'122px'}}/> */}
</div>

ReactDOM.render(<div className='box'>
  <p>DeatAugust</p>
  <img src={Img}/>
</div>,document.getElementById('root'))
