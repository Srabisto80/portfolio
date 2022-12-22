import React, { Component } from 'react';
// import Nav from './Nav';
import picjavascript from '../images/javascript.png';
import picreact from '../images/react.png';
import picbootstrap from '../images/bootstrap.png';
import picgithub from '../images/github2.png';
import picnodejs from '../images/nodejs.png';
import picmongodb from '../images/mongodb.png';
import { useActionData } from 'react-router-dom';


class SkillList extends Component {
    constructor (props) {
        super(props)
        this.state = {
           skills: true
        }
        
        this.goToHard = this.goToHard.bind(this)
        this.goToSoft = this.goToSoft.bind(this)
    }

    goToHard () {
        this.setState ({
            skills: true
        })
    }

    goToSoft () {
        this.setState ({
            skills: false
        })
    }
   

    render() {
        return (
        <div id='SkillListPage'>
        {/* <Nav /> */}
        <h1 className='titleOfPage'>Skills I Have Acquired</h1>

        <div id='skillsTab'>
            <button onClick={this.goToHard}>Hard Skills</button>
            <button onClick={this.goToSoft}>Soft Skills</button>
        </div>
        <div id='allSkills'>
      
                {/* <div id='hardSkills' style={{display: (skills) ? "block" : "none"}}> */}
                <div id='hardSkills'>
                    <img src={picjavascript} alt='JavaScript' className='hardSkillLogo' id='JavaScript' />
                    <img src={picreact} alt="REACT" className='hardSkillLogo' id='REACT' />
                    <img src={picbootstrap} className='hardSkillLogo' id='BootStrap'></img>
                    <img src={picgithub} alt='GitHub' className='hardSkillLogo' id='GitHub' />
                    <img src={picnodejs} alt='Node.js' className='hardSkillLogo' id='Node.JS' />
                    <img src={picmongodb} alt='MongoDb' className='hardSkillLogo' id='MongoDb' />
                </div>
          
                {/* <div id='softSkills' style={{display: !skills ? "block" : "none"}}> */}
                <div id='softSkills'>
                    <table id='softSkillsTable'>
                        <tr>
                            <td>Excellent Verbal and Written Communication</td>
                            <td>Great ability to multitask</td>
                            <td>Very Personable and Friendly</td>
                        </tr>
                        <tr>
                            <td>Solid Leadership skills and abilities</td>
                            <td>Creative thinking</td>
                            <td>Learn new ideas quickly</td>
                        </tr>
                        <tr>
                            <td>Work great under pressure</td>
                            <td>Ability to manage employees as well as customers</td>
                            <td>Trustworthy</td>
                        </tr>
                    </table>
                </div>
    
            </div>

        </div>
    )
        }
}





export default SkillList
