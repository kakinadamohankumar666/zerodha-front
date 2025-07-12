import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='p-3' id="supportWrapper">
                <h4>Support portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className='row p-3 m-3'>
                <div className='col-1'></div>
                <div className='col-5 p-3'>
                    <h1 className='fs-2 mb-5'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-5' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'></input><br/>
                    <a href="" className='me-3'>Track account opening   </a>
                    <a href="" className='me-3'> Track segment activation   </a>
                    <a href=""> Intraday margins   </a><br/>
                    <a href="">   Kite user manual</a>
                </div>
                <div className='col-5 p-3 m-3'>
                     <h1  className='fs-2 '>Featured</h1>
                     <ol>
                        <li><a href="">Current Takeovers and Dealistings -January 2025</a></li>
                        <li><a href="">Latest Intraday leaverages - MIS & CO</a></li>
                     </ol>
                </div>
                <div className='col-1'></div>
            </div>
        </section>
     );
}

export default Hero;