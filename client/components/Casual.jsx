import React from 'react'
import {connect} from 'react-redux'
import Box from './Box'
import {Link} from 'react-router-dom'
import {addItems, getId} from '../actions/carts'

let savedItems = [];

class Casual extends React.Component {
 constructor(props){
  super(props)
  this.state = {
    isHidden: false,
    savedValues: [],
    view:false
  }

  this.handleClick = this.handleClick.bind(this);
 }

 handleClick(e) {
  
  let items = []
  let elementArr = document.getElementsByClassName('active')

  let Arr = Array.prototype.slice.call(elementArr);

  for (var i = 0; i < Arr.length; i++) {
    Arr.splice(i , 1);
  }
  for(let i = 0; i < Arr.length; i++){
    items.push(Arr[i].childNodes[0].id)
  }
  savedItems = items;
  this.setState({
    savedValues: savedItems,
    view:true
  })
  this.props.addItems(savedItems)
}

 render () {
  return (
    <div>
      <div className='box'>
        <h1>Casual Package</h1>
        <Box src1 = "/rib.jpg" id1 = "rib" src2= "/trim.jpg" id2="trim" src3="/textured.jpg" id3="textured"/>
        <Box src1 = "/noir.jpg" id1 = "noir" src2= "/black.jpg" id2="black" src3="/woven.jpg" id3="woven"/> 
        <Box src1 = "/jeans.jpg" id1 = "jeans" src2= "/drawcord.jpg" id2="drawcord" src3="/white.jpg" id3="white"/>   
        <Box src1 = "/anya.jpg" id1 = "anya" src2= "/jusmin.jpg" id2="jusmin" src3="/malia.jpg" id3="malia"/>
        {!this.state.view ? 
          (<div>
              <button id ="add" onClick={this.handleClick}>+Add</button>
          </div>):(this.state.view && this.props.auth.isAuthenticated ? (<Link to={{pathname: '/Package/casual/saved', state: {savedValues: savedItems}}}>
          <button id ="save">View</button>
        </Link>) :(<Link to = {'/signup'}><button id ="signup">Sign up</button></Link>))} 
      </div>
    </div>
)
}
}


function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    addItems:(id,items)=> {dispatch(addItems(id,items))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Casual)