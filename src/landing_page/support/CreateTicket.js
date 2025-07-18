import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h2 className='fs-2'>To create a ticket, select a relevant topic</h2>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Resident individual</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Minor</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Glossary</a>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa-regular fa-user"></i> Your Zerodha Account</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Account modification</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Nomination</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of securities</a>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa-solid fa-chart-simple"></i> Kite</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charts and orders</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Alerts and Nudges</a>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>General</a>
                </div>
                <div className='col-4 p-5 mt-1 mb-5'>
                    <h4 className=''><i class="fa-solid fa-credit-card"></i> Funds</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add money</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Withdraw money</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add bank accounts</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>eMandates</a><br/>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa-solid fa-terminal"></i> Console</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Funds statement</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Reports</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Segments</a>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa-solid fa-coins"></i> Coin</h4>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Mutual funds</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Features on Coin</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Payments and Orders</a><br/>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>General</a>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;