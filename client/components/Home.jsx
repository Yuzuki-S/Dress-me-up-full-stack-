import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="home_page">
      <video autoPlay muted loop id="myVideo">
        <source src="video.m4v" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <h1 className="cover-heading">Dress Me Up</h1>
      <ButtonToolbar>
        <Link id="list" to="/About">
          <Button id="button" bsStyle="primary" bsSize="large">
            Learn more
            </Button>
        </Link>

        <Link id="list" to="/Package">
          <Button id="button2" bsStyle="primary" bsSize="large">
            Order now
            </Button>
        </Link>

      </ButtonToolbar>
    </div>
  )
}

export default Home