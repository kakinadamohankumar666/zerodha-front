import React from 'react';

function Hero() {
    return ( 
        <div className= 'container '>
            <div className='row text-center'>
                <img src = 'media/images/homeHero.png'alt = 'Hero Image' className='mb-5'/>
                <h5 class="display-5 fw-semibold">Invest in everything</h5>
                <br></br>
                <h5 className=''>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
                <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%",margin:"0 auto"}}>signup for free</button>
            </div>
        </div>
     );
}

export default Hero;