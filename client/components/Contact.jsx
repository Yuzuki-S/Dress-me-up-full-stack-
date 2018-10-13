import React from 'react'
import {FieldGroup, Button,FormGroup, ControlLabel, FormControl, Col}  from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Contact extends React.Component {
 constructor(props){
  super(props)
  }
  render() {
    return (
      <div className='box'>
        <h1>Contact us</h1>
        <form>
          <FormGroup  id="contact" controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="name" placeholder="Your name" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email address" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <Col componentClass={ControlLabel} sm={2}>
              Message
            </Col>
            <Col sm={10}>
              <FormControl componentClass="textarea" placeholder="message" />
            </Col>
          </FormGroup>

          <Link to= '/Contact/confirmed'><Button id= "contactSubmit" type="submit">Submit</Button></Link>
        </form>
      </div>
    )
  }
}



export default Contact