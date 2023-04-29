import React from 'react'
import './Capstone.css'
export default function Capstone() {

  return (
    <div className='capstone-info'>
      <h1>Capstone Project: </h1>
        <div className='capstone-docs'>
          <h3>Cash4Work</h3>
          <ul className='project-info'>
            <li className='project-info-cell'>Project Summary:<p>Cash4Work - Job seeking app. The objective of the application is help people to find fast short term job. The service is available on web and mobile platform. Application allow users to use filters to sort opportunities, create their own and upload resume or cover letters. Application allows communication between users in the application.</p></li>
            <li className='project-info-cell'>Project Plan:<p>The project is an intermidiate application that makes communication between job seekers and employers easy. It provides User friendly UI. </p></li>
            <li className='project-info-cell'>
              Business Requirments:
              <div>
                <ul>
                  <li>Functional requirments: Backend Hosting, Web and Mobile application</li>
                  <li>Non-functional requirements: User Friendly UI, Functionalities to perform search and filter</li>
                  <li>Performance requirements: Fast response</li>
                </ul>
              </div>
            </li>
            <li className='project-info-cell'>Project Vision:<p>Project is trying to improve job seeking process for people and improve workers find for workers. The project is focused on short-term temporary job</p></li>
            <li className='project-info-cell'>Design & Analysis Requirmnets:<p>Project must be hosted on remote server. UI must be reliable and simple. Project perfomance must be acceptable</p></li>
            
            <li className='project-info-cell'>Technologies:<p>Node js Flusk, ReactJs, React Native</p></li>
            <li className='project-info-cell'>Links:
              <div>
                <a href='https://github.com/HamdaanYare/cash4work-front_end' target="_blank">Github</a>
                <a href='https://cash4-work.web.app/jobs' target="_blank">The project</a>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}
