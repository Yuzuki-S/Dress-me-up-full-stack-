import React from 'react'
import Box from './Box'
import {Link} from 'react-router-dom'

let savedItems = [];

class Sports extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: false,
      savedValues: []
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
  savedItems =items;
  this.setState({
    savedValues: savedItems
  })
}

render () {
  return (
    <div>
      <div className='box'>
        <h1>Sporty Package</h1>
        <Box src1 = "/puffer.jpg" id1 = "puffer" src2= "/hoodie.jpg" id2="hoodie" src3="/peach.jpg" id3="peach"/>
        <Box src1 = "/linen.jpg" id1 = "linen" src2= "/crew.jpg" id2="crew" src3="/green.jpg" id3="green"/> 
        <Box src1 = "/jersey.jpg" id1 = "jersey" src2= "/drawcord.jpg" id2="drawcord" src3="/legging.jpg" id3="legging"/>   
        <Box src1 = "/leon.jpg" id1 = "leon" src2= "/lola.jpg" id2="lola" src3="/pink.jpg" id3="pink"/>
        <div>
        <button id ="add"  onClick={this.handleClick}>+Add</button>
        </div>
        <Link to={{pathname: '/Package/sports/saved', state: {savedValues: savedItems}}}>
          <button id ="save">View</button>
        </Link>
      </div>
    </div>
  )
}
}
export default Sports