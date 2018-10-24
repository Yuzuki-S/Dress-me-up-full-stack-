import React from 'react'
import {FieldGroup, Button,FormGroup, ControlLabel, FormControl, Col}  from 'react-bootstrap'
import ContactReceived from './ContactReceived'


class Contact extends React.Component {
 constructor(props){
  super(props)
  this.state={
    thankyou:false
  }
 
  this.handleSubmit=this.handleSubmit.bind(this)
  }

  // handleChange(e){
  //   console.log(e.target.value)
  // }

  handleSubmit(){
    this.setState({
      thankyou:true
    })
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); 
      emailjs.sendForm('gmail', 'testing', this);
    });
  }

  render() {
    return (
      <div className='box'>
      {this.state.thankyou ? <ContactReceived/> :
      <div>
        <h1 id="contact_text">Contact us</h1>
        <form id="contact-form">
          <FormGroup  id="contact" controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2} id="contact_text" >
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="name" placeholder="Your name" name="name"/>
            </Col>
          </FormGroup>
          
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2} id="contact_text">
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email address" name="email" onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <Col componentClass={ControlLabel} sm={2} id="contact_text" >
              Message
            </Col>
            <Col sm={10}>
              <FormControl componentClass="textarea" placeholder="message" name="message"/>
            </Col>
          </FormGroup>

         <Button onClick={this.handleSubmit} id= "contactSubmit" type="submit" value="submit">Submit</Button>
        </form>
        </div>}
      </div>
    )
  }
}



export default Contact