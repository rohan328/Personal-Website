import React from 'react'
import './css/Projects.css'
import {Row, Col, Container} from 'reactstrap'
import { Card, makeStyles, CardHeader, CardContent } from '@material-ui/core';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'black',
    boxShadow: '0 0 10px 1px rgba(255,255,255,0.8)',
    color: 'white',
    fontSize: '1rem',
    height: '300px',
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


function Projects(){
    const classes = useStyles()

    return(
        <Container id='project-grid'>
            <Col>
                <center>
                    <a href="https://github.com/DocchiAndroid/Docchi" target="_blank">
                        <Card className={clsx(classes.card, "projectCards")}>
                            <CardHeader title="Docchi"/>
                            <CardContent className={classes.cardContent}>
                                <img src="images/docchi.gif"/>
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://github.com/rohan328/Parsetagram" target="_blank">
                        <Card className={clsx(classes.card, "projectCards")}>
                            <CardHeader title="Parsetagram"/>
                            <CardContent className={classes.cardContent}>
                                <img src="images/parsetagram.gif"/>
                            </CardContent>
                        </Card>
                    </a>
                </center>
            </Col>
            <Col>
                <center>
                    <a href="https://github.com/rohan328/Parsetagram" target="_blank">
                        <Card className={clsx(classes.card, "projectCards")}>
                            <CardHeader title="Personal Website"/>
                            <CardContent className={classes.cardContent}>
                                <img src="#"/>
                            </CardContent>
                        </Card>
                    </a>
                    <Card className={clsx(classes.card, "projectCards")}>
                        <CardHeader title="Resume"/>
                    </Card>
                </center>
            </Col>
        </Container>
    );
}

export default Projects;
