import React from 'react'
import './Resume.css'
export default function Resume() {
    // Resume
     const resume = 'Sample PDF content...';

    // Create a Blob from the PDF content
    const pdfBlob = new Blob([resume], { type: 'application/pdf' });

     // Create a URL for the Blob object
    const pdfUrl = URL.createObjectURL(pdfBlob);
    // Resume
    const cv = 'Sample PDF content...';

    // Create a Blob from the PDF content
    const pdfBlobCv = new Blob([cv], { type: 'application/pdf' });

     // Create a URL for the Blob object
    const pdfUrlCv = URL.createObjectURL(pdfBlob);
  return (
    <div className='resume-form' id='resume'>
        <div>
            <h3>Resume</h3>
            <a href={pdfUrl} download="resume.pdf">Download Resume</a>
        </div>
        <div>
            <h3>Cover Letter</h3>
            <a href={pdfUrlCv} download="cv.pdf">Download CV</a>
        </div>
        

    </div>
  )
}
