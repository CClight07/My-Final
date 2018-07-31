import React, { Component } from 'react';
import Html from "./html"
import Scss from "./scss"
import Java from "./java"

class Front extends Component {
  render() {
    return (
      <div className='front-page'>
        <h1>Coding Information</h1>
         <div className='content'>
           <Html/>
           <Scss/>
           <Java/>
         </div>
      </div>
    );
  }
}

export default Front


