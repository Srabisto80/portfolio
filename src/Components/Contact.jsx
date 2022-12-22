import React from 'react';
// import Nav from './Nav';

function Contact () {
    return (
        <div>
        {/* <Nav /> */}
        <h1 className='titleOfPage'>How to get ahold of me</h1>
        <form id="contactForm" action='mailto:shanthy.rabindranath@gmail.com'>
            <div className='firstColumn'>
                <label for='name' >Enter your name:</label> 
                <br />
                <input type='text' id='name' placeholder='John Smith'/>
                <br />
                <br />
                <label for='phone'>Enter your phone number:</label>
                <br />
                <input type='tel' id='phone' placeholder='555-555-5555' />
                <br />
            
            </div>

            <div className='secondColumn'>
                <label for='email'>Enter your email:</label>
                <br />
                <input type='email' id='email' placeholder='john.smith@gmail.com' />
                <br />
                <br />
                <label for='represent'>What company do you represent?</label>
                <br />
                <input type='text' id='represent' placeholder='Representing self'/>
                <br />
            </div>
            <br />
            <div className='messagebox'>
                <label for='message'>Write your message here:</label>
                <br />
                <textarea id='message' type='text' placeholder='Hi, my name is....' cols='8' rows='9'/>
            </div>
            <button type='submit' id='submitButton'>Send Now!</button>
        </form>

        </div>
    )
}

export default Contact;