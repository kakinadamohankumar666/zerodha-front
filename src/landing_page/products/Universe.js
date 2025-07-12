import React from 'react';

function Universe() {
    return (  
        <div className='container mt-5'>
            <div className='row text-center '>
                <h1>The Zerodha Universe</h1>
                <h4 className='mt-3'>Extend your trading and investiment experience even further with our partner platforms</h4>
                <div className='col-4 p-3'>
                    <img style={{ width: '170px', height: '170px', objectFit: 'contain' }} alt="Smallcase"src="media/images/smallcaseLogo.png"/>
                    <h4 className='text-small text-muted'>Theamatic investiment platform</h4>
                </div>
                <div className='col-4 p-3'>
                    <img style={{ width: '170px', height: '170px', objectFit: 'contain' }} alt="Smallcase"src="media/images/streakLogo.png"/>
                    <h4 className='text-small text-muted'>Algo & strategy platform</h4>
                </div>
                <div className='col-4 p-3'>
                    <img style={{ width: '170px', height: '170px', objectFit: 'contain' }} alt="Smallcase"src="media\images\sensibullLogo.svg"/>
                    <h4 className='text-small text-muted'>Options trading platform</h4>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{ width: '170px', height: '170px', objectFit: 'contain' }} alt="Smallcase"src="media\images\zerodhaFundhouse.png"/>
                    <h4 className='text-small text-muted'>Asset management</h4>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{ width: '170px', height: '170px', objectFit: 'contain' }} alt="Smallcase" src="media\images\goldenpiLogo.png"/>
                    <h4 className='text-small text-muted'>Bonds trading platform</h4>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{ width: '170px', height: '170px', objectFit: 'contain' }} alt="Smallcase"src="media\images\dittoLogo.png"/>
                    <h4 className='text-small text-muted'>Insurance</h4>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%",margin:"0 auto"}}>signup for free</button>
            </div>
        </div>
    );
}

export default Universe;