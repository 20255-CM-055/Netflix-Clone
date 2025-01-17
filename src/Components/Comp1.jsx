import React from 'react';
import './Netflix.css';
import { MdKeyboardArrowRight } from "react-icons/md";
function Comp1()
{
    return(
        <>
        <div className='page1'>
           {/* <img src='Netflix_background.png' width="100%" height="100%"/> */}
            <div className='head'>
                <div className='icon'></div>
                <div className='options'>
                    <div className='drop_down'>
                        <select className='n1'>
                            <option><sub>t'A</sub>&nbsp;English</option>
                            <option><sub>t'A</sub>&nbsp;Espanol</option>
                            <option><sub>t'A</sub>&nbsp;Japanese</option>
                        </select>
                    </div>
                    <div className='sign_in'>
                        <button className='btn1'>Sign in</button>
                    </div>
                </div>
            </div>

            <div className='unlimited'>
                <div className='un'><center><h1 className='heading'>Unlimited movies, TV shows & more</h1></center>
                <center><p className='line1'>Watch anywhere. Cancel anytime.</p></center>
                <center><p className='line2'>Ready to watch? Enter your email to create or restart your membership.</p></center>

                <center>
                <div className='emaill'>
                    <div className='em'>
                        <input type='email' className='em2' placeholder='&nbsp;Email address....'></input>
                    </div>
                    <div className='start'>
                        <button className='start2'>Get Started <MdKeyboardArrowRight /></button>
                    </div>
                </div>
                </center>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Comp1;