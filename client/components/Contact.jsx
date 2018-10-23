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
        <h1 id="contact_text">Contact us</h1>
        <form id="contact-form">
          <FormGroup  id="contact" controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2} id="contact_text" >
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="name" placeholder="Your name" name="user_name"/>
            </Col>
          </FormGroup>
          
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2} id="contact_text">
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email address" name="user_email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <Col componentClass={ControlLabel} sm={2} id="contact_text" >
              Message
            </Col>
            <Col sm={10}>
              <FormControl componentClass="textarea" placeholder="message" name="contact"/>
            </Col>
          </FormGroup>

          <Link to= '/Contact/confirmed'><Button id= "contactSubmit" type="submit" value="submit">Submit</Button></Link>
        </form>
      </div>
    )
  }
}



export default Contact