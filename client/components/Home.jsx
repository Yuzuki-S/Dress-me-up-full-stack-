import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="home_page">
      <video id="bgvid" playsInline autoPlay muted loop>
        <source src="./video.mp4" type="video/mp4" />
      </video>
      <div id="Home_main">
      <h1 className="cover-heading">Dress Me Up</h1>
      <ButtonToolbar>
        <Link id="list" to="/About">
          <Button id="Home_button" bsStyle="primary" bsSize="large">
            Learn more
            </Button>
        </Link>

        <Link id="list" to="/Package">
          <Button id="Home_button2" bsStyle="primary" bsSize="large">
            Order now
            </Button>
        </Link>

      </ButtonToolbar>
      </div>
    </div>
  )
}

export default Home