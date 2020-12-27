import React from 'react';
import {Row, Col, Container} from 'reactstrap'
import PropTypes from 'prop-types'
import { Card, makeStyles, CardHeader } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import profileCard from '../components/profileCard'
import "./css/Home.css"


function Home() {

  return (
      <Container id="home-grid">
          <Col>
              <center>
                  {profileCard("white")}
              </center>
          </Col>
          <Col>
              <center>
                  <h1>Hi, I am Rohan</h1>
                  <p id="homeIntro">I am currently a second year Computer Engineering Major
                   at San Jose State University, planning to graduate in
                   December of 2022. I am seeking a internship for
                   Summer 2021.</p>
              </center>
          </Col>


      </Container>
  );
}

export default Home
