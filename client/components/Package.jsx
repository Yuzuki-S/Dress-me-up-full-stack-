import React from 'react'
import {Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

function Package () {
  return (
    <div className='box'>
      <h1 id="packageHead">Package</h1>
      <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="/img4.jpg" alt="242x200">
        <h3>Sports Package</h3>
        <p>Bring home the victory today! - $75/month</p>
        <p>
          <Button href="#/Package/sports" bsStyle="primary" >Buy Now</Button>
          &nbsp;
          <Button bsStyle="default">More Info</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail class="imgPackage" src="/img2.jpg" alt="242x200">
        <h3>Casual Package</h3>
        <p>Look sexy and free - only $80/month</p>
        <p>
          <Button href="#/Package/casual" bsStyle="primary">Buy Now</Button>
          &nbsp;
          <Button bsStyle="default">More Info</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/img3.jpg" alt="242x200">
        <h3>Work Package</h3>
        <p>Get that promotion today - only $120/month</p>
        <p>
          <Button href="#/Package/work" bsStyle="primary">Buy Now</Button>
          &nbsp;
          <Button bsStyle="default">More Info</Button>
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>
    </div>
  )
}

export default Package