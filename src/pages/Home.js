import React from 'react';
import {Row, Col, Container} from 'reactstrap'
import {Link,} from 'react-router-dom';
import { Card, makeStyles, CardHeader } from '@material-ui/core';
import clsx from 'clsx';
import profileCard from '../components/profileCard'
import "./css/Home.css"

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'black',
    boxShadow: '0 0 10px 1px rgba(255,255,255,0.8)',
    color: 'white',
    fontSize: '1rem',
    height: '70px',
    width: '300px',
    marginBottom: '30px',
    overflow: 'hidden',
    paddingBottom: '0px',
    cursor: 'pointer'
  },
  cardContent: {
    padding: '5px 10px',
  }
}))


function Home() {
    const classes = useStyles()

  return (
      <Container id="home-grid">
          <Col>
              <center>
                  {profileCard("white")}
              </center>
          </Col>
          <Col>
              <Row>
                  <center>
                      <h1>Hi, I'm Rohan</h1>
                      <p id="homeIntro">I am currently a second year Computer Engineering Major
                       at San Jose State University, planning to graduate in
                       December of 2022. I am seeking an internship for
                       Summer 2021.</p>
                  </center>
              </Row>
              <Col>
                  <center>
                      <Link to="/resume">
                          <Card className={clsx(classes.card, "homeCards")}>
                              <CardHeader title="Resume"/>
                          </Card>
                      </Link>

                      <Link to="/projects">
                          <Card className={clsx(classes.card, "homeCards")}>
                              <CardHeader title="Projects"/>
                          </Card>
                      </Link>

                      <Link to="/contact">
                          <Card className={clsx(classes.card, "homeCards")}>
                              <CardHeader title="Contact"/>
                          </Card>
                      </Link>

                  </center>
              </Col>

          </Col>


      </Container>
  );
}

export default Home
