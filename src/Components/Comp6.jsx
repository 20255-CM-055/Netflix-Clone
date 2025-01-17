import React from 'react';
import './Netflix.css';
import { MdKeyboardArrowRight } from "react-icons/md";
function Comp6()
{
    return(
        <>
        <div className='page6'>
        <h1 className='enjoy'>Frequently Asked Questions</h1>
        <div className='container'>
            <div className='c1'>
                <div className='he'><p>What is Netflix?</p></div>
                <div className='cross'><p>X</p></div>
            </div>
            <div className='c1'>
                <div className='he'><p>How much does Netflix cost?</p></div>
                <div className='cross'><p>X</p></div>
            </div>
            <div className='c1'>
                <div className='he'><p>Where can I watch?</p></div>
                <div className='cross'><p>X</p></div>
            </div>
            <div className='c1'>
                <div className='he'><p>How can I cancel?</p></div>
                <div className='cross'><p>X</p></div>
            </div>
            <div className='c1'>
                <div className='he'><p>Watch can I watch on Netflix?</p></div>
                <div className='cross'><p>X</p></div>
            </div>
            <div className='c1'>
                <div className='he'><p>Is Netflix good for kids?</p></div>
                <div className='cross'><p>X</p></div>
            </div>
        </div>

        
        
        </div>
        <div className='ready'>
            <br></br>
            <center><p className='member'>Ready to watch? Enter your email to create or restart your membership.</p></center>
            <div>
                <div className='email2'>
                
                        <input type='email' className='emm' placeholder='&emsp;Email Address....'></input>
                    
                    <div className='btn2'>Get Started <MdKeyboardArrowRight /></div>    
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Comp6;