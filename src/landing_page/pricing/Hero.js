import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Pricing</h1>
                <h3 className="text-muted mt-3 fs-5">
                    Free equity invstiments and flat ₹20 traday and F&O trades
                </h3>
            </div>
            <div className='row p-5 mt-5 text-center'>
            <div className='col-4 p-4'>
                <img src="media/images/pricingEquity.svg"/>
                <h1 className='fs-3'> Free equity delivery</h1>
                <p> All equity delivery investiments (NSE, BSE), are absolutely free -₹0 brokerage</p>
            </div>
            <div className='col-4 p-4'>
                <img src="media/images/intradayTrades.svg"/>
                <h1 className='fs-3'>Intraday and F&O trades</h1>
                <p>Flat Rs. 20 or 0.03% (whichever is lover) per executed order on intraday trades across equity , currency, and commodity trades.</p>
            </div>
            <div className='col-4 p-4'>
                <img src="media/images/pricingEquity.svg"/>
                <h1 className='fs-3'>Free direct MF</h1>
                <p>ALL direct mutual fund investiments are absolutely free -₹0 commossions & DP charges.</p>
            </div>
            </div>
        </div>
     );
}

export default Hero;