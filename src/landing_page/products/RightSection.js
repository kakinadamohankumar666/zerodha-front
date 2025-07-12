import React from 'react';
function RightSection({imageURL, title, description, link}) {
    return ( 
        <div className='container'>
            <div className='row'>
            <div className='col-6 mt-5 p-3'>
                <h1>{title}</h1>
                    <p>{description}</p>
                    <div>
                    <a href={link}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='col-6'>
                <img src={imageURL}/>
            </div>
            </div>
        </div>
     );
}

export default RightSection;