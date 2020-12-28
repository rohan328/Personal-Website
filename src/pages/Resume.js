import React from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function getPageWidth(){
    const windowWidth = window.innerWidth
    if(windowWidth<900) return windowWidth
    else return 900;
}

function Resume(){
    return(
        <div>
            <center>
                <a href="resume.pdf" download>
                    <img src="images/download.svg" height='50px' alt="download button"/>
                </a>
                <br/><br/>
                <Document file='resumeDark.pdf'>
                    <Page pageNumber={1} width={getPageWidth()}/>
                </Document>
            </center>
        </div>
    );
}

export default Resume;
