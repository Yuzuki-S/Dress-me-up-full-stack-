import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function About () {
  return (
    <div className='box'>
          <h1>Do you wish you had your own fashion stylist? </h1>

        <p>
            Select your preferred package and receive a box of personally selected clothing periodically to keep your wardrobe fresh. 
        </p>
        <h2>1. YOU CHOOSE </h2>
        <p>
          There are a range of different packages to choose from. Designed for different occasions.
        </p>
        <h2>2. WE CREATE </h2>
        <p>
          Get professional stylists to choose what suits you based on your preferences.
        </p>
        <p>
          We will give you a selection to choose from.
        </p>
        <h2>3. YOU DECIDE</h2>
        <p>
          Choose how often you want a new package, to keep your wardrobe fresh!
        </p>
        <h2>4. WE DELIVER </h2>
        <p>
          Receive your package directly to a location of your choice. 
        </p>
        <h2>5. YOU WEAR AND LOOK GREAT </h2>
        <p> Dress up and you are ready to go show off your new outfit! </p>
        <div id="buttonsMain">
        <ButtonToolbar>
          <Link id = "list" to = "/Package">
            <Button id= "button2" bsStyle="primary" bsSize="large" >
              Order now
            </Button>
          </Link>
        </ButtonToolbar>
      </div>
    </div>
  )
}

export default About