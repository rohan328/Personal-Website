import React from 'react'
import './css/Projects.css'
import {Col, Container} from 'reactstrap'
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
                    <Card
                        className={clsx(classes.card, "projectCards")}
                        onClick={() => window.open('https://github.com/DocchiAndroid/Docchi', '_blank')}>
                        <CardHeader title="Docchi"/>
                        <CardContent className={classes.cardContent}>
                            <img src="images/docchi.gif" alt="docchi.gif"/>
                        </CardContent>
                    </Card>
                    <Card
                        className={clsx(classes.card, "projectCards")}
                        onClick={()=> window.open("https://github.com/rohan328/Parsetagram", '_blank')}>
                        <CardHeader title="Parsetagram"/>
                        <CardContent className={classes.cardContent}>
                            <img src="images/parsetagram.gif" alt="parsetagram.gif"/>
                        </CardContent>
                    </Card>
                    <Card
                        className={clsx(classes.card, "projectCards")}
                        onClick={()=>window.open("https://github.com/rohan328/Twitter-Client", '_blank')}>
                        <CardHeader title="Twitter Client"/>
                        <CardContent className={classes.cardContent}>
                            <img src="images/twitterclient.gif" alt="twitterclient.gif"/>
                        </CardContent>
                    </Card>
                </center>
            </Col>
            <Col>
                <center>
                    <Card
                        className={clsx(classes.card, "projectCards")}
                        onClick={()=>window.open("https://github.com/rohan328/Personal-Website", '_blank')}>
                        <CardHeader title="Personal Website"/>
                        <CardContent className={classes.cardContent}>
                            <img src="images/personalwebsite.gif" alt="personalwebsite.gif"/>
                        </CardContent>
                    </Card>
                    <Card
                        className={clsx(classes.card, "projectCards")}
                        onClick={() => window.open("https://github.com/rohan328/MemoryGame", '_blank')}>
                        <CardHeader title="Memory Game"/>
                        <CardContent className={classes.cardContent}>
                            <img src="images/memorygame.gif" alt="memorygame.gif"/>
                        </CardContent>
                    </Card>
                    <Card
                        className={clsx(classes.card, "projectCards")}
                        onClick={()=>window.open("https://github.com/rohan328/flixster", '_blank')}>
                        <CardHeader title="Flixster"/>
                        <CardContent className={classes.cardContent}>
                            <img src="images/flixster.gif" alt="flixster.gif"/>
                        </CardContent>
                    </Card>
                </center>
            </Col>
        </Container>
    );
}

export default Projects;
