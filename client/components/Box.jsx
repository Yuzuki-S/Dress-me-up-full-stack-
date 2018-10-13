import React from 'react'
import {Carousel, ButtonToolbar,OverlayTrigger, Popover} from 'react-bootstrap'



class Box extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isDeleted: false
    }

    this.crossClick = this.crossClick.bind(this);

  }

  crossClick(){
    this.setState({
      isDeleted: true
    })
    
  }

  render() {

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        <strong>Remove the item</strong> 
      </Popover>
    );


    if(!this.state.isDeleted){
      return (

        <div name="firstBox" id="carousel">
        <Carousel interval={null}>
          <Carousel.Item>
            <img width={360} height={425} alt="360x425" id={this.props.id1} src={this.props.src1} />
          </Carousel.Item>
          <Carousel.Item>
            <img width={360} height={425} alt="360x425" id={this.props.id2} src={this.props.src2} />
          </Carousel.Item>
          <Carousel.Item>
            <img width={360} height={425} alt="360x425" id={this.props.id3} src={this.props.src3} />  
          </Carousel.Item>
        </Carousel>
        <div>
          <ButtonToolbar>
            <OverlayTrigger
              trigger={['hover', 'focus']}
              overlay={popoverHoverFocus} >
                <button name="firstBox" id ="x" onClick={this.crossClick}>X</button>
            </OverlayTrigger>
          </ButtonToolbar>
        </div>
      </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default Box