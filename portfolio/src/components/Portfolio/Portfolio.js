import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div class="col">
        <div class="row">
          <div class="col">
            <img src="https://www.iconfinder.com/data/icons/geometry-lines-and-objects/154/parallel-lines-geometry-2-512.png" alt='lines'/>
            <h6>menu</h6>
          </div>
          <div class="col">
            <img src="https://www.lego.com/cdn/cs/set/assets/bltd3cfe1c07b732cde/LEGO_LOGO.png?format=png&height=40&dpr=1"/>
          </div>
        </div>
      </div>
    )
  }

}

export default Portfolio;