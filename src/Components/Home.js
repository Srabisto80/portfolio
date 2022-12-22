import React from 'react'
import picLinkedIn from '../images/linkedIn.png';
import picGitHub from '../images/github.png';
import picEmail from '../images/email2.png';






// import Nav from './Nav'

// class Home extends Component {
//     render () {
//         return (
//             <div> 

//             <h1 id="introLine">
//                 Hello. My name is Shanthy Rabindranath, and I am a web developer!
//             </h1>

//             </div>
//         )
//     }
// }

function Home() {
    return (
        <div id='homePage'>
            {/* <Nav /> */}
            <h1 id="introLine">
                Hello. My name is Shanthy Rabindranath, and I am a web developer!
            </h1>
            {/* <p>
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
            </p> */}
            <div id="backSquare"></div>
      <div id="frontSquare"></div>
            <div id='connects'>
                <a href='https://www.linkedin.com/in/shanthy-rabindranath-32080s/'><img className='homeImages' src={picLinkedIn} alt='Linked In' /></a>       
                <a href='https://github.com/Srabisto80'><img className='homeImages' src={picGitHub} alt='Git Hub' /></a>       
                <a href='mailto:shanthy.rabindranath@gmail.com'><img className='homeImages' src={picEmail} alt='Email' /></a>       

            </div>
        </div>
    )
}

export default Home