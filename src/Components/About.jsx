import React from 'react';
// import Nav from './Nav';
import myProfilePic from '../images/profilepic.png';
import myKids from '../images/Children.jpg';
import seasparrow from '../images/seasparrow';


function About () {
    return (
        <div>
        {/* <Nav /> */}
            <h1 className='titleOfPage'>About Me</h1>

        <div id='myIntro'>
            <p id='firstLine'>
                Hello! My name is Shanthy and I love creating things that others can utilize and enjoy.  I graduated from the Persevere Boot Camp as a Certified MERN Full Stack Developer, and began working with Banyan Labs, Inc.  I am very excited to see what the future will bring!

                
                
                  {/* Coding has progressed and transformed so much in the last 30 years, and I am simply thrilled to be a part of it once again.  I am passionate about solving problems and working through puzzles, which I have found in writing code.  

                 I am constantly learning more, driven to  be the best I can possibly become. 
                With technology being so dynamic, I know how important it is to stay on top of the newest developments in coding languages, while still securely honing the older ones. */}
            </p>
            <img src={myProfilePic} alt='My Picture' id='profilePic' />
        </div>
        
        <div id="myStory">
            <h2>
                <u>My Story</u>
            </h2>
            <p>
                I first fell in love with computer programming before there was any internet, writing Basic code in High School.  My friends and I would compete with each other to create the best game written on a graphing calculator!
            </p>

            <img src={seasparrow} alt='Sea Sparrow Missile System' />
            <p>
                I started my secondary education while in the United States Navy where I served aboard the USS Hewitt as a FireControlman, basically an electrical engineer working on the Sea Sparrow Missile System.  After leaving the service, I continued that line of education and obtained my Associates Degree in Computer and Electrical Engineering from ITT Technical Institute in San Diego, CA.
            </p>


            <img src={myKids} alt='My children' id='myKids'/>
            <p id='kidsInBack'>
                Then came life and family, and I therefore made the decision to become a Certified High School Math Teacher so that I could be home with my children as much as possible. (Those were the days before all this remote working!) 
            </p>
            <br />

            <p id='lastPara'>
                However, time passed and I found myself without school age children any longer.  There may have been heartbreak at first, but then I saw how I could start living a different life!  I went back to my desires of teenage years, and became educated and profficient in front-end and back-end web development. 
            </p>
        </div>    





        </div>
    )
}

export default About;