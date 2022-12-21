import React from 'react';
// import Nav from './Nav';
import picjavascript from './javascript.png';
import picreact from './react.png';
// import picbootstrap from './bootstrap.png';
import picgithub from './github.png';
import picnodejs from './nodejs.png';
import picmongodb from './mongodb.png';

function Skills () {
    return (
        <div>
        {/* <Nav /> */}
        <h1 className='titleOfPage'>Skills I Have Acquired</h1>
        <div id='allSkills'>
                <div id='hardSkills'>
                    <img src={picjavascript} alt='JavaScript' className='hardSkillLogo' id='JavaScript' />
                    <img src={picreact} alt="REACT" className='hardSkillLogo' id='REACT' />
                    {/* <img src={picbootstrap} className='hardSkillLogo' id='BootStrap'></img> */}
                    <img src={picgithub} alt='GitHub' className='hardSkillLogo' id='GitHub' />
                    <img src={picnodejs} alt='Node.js' className='hardSkillLogo' id='Node.JS' />
                    <img src={picmongodb} alt='MongoDb' className='hardSkillLogo' id='MongoDb' />
                </div>
                <div id='softSkills'></div>
            </div>

        </div>
    )
}

export default Skills;