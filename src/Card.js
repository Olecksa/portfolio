import React from 'react';
import './index.css';

 function Card ({ title ,  imageEarth , body }) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageEarth} alt='Earth Hero' />
            </div>
        <div className='card-title'>
            <h3>{ title }</h3>
        </div>

        <div className='card-body'>
           <p>{ body }</p>
        </div>
        <br />
        <div className='btn'>
            <button>
                <a href='https://www.figma.com/proto/SsyU8EaNa5LQ3GHL4DVn0U/Earth-Heroes?page-id=287%3A17&type=design&node-id=659-1687&viewport=334%2C-319%2C0.12&scaling=scale-down&starting-point-node-id=659%3A1687&show-proto-sidebar=1&mode=design'>
                    View in Figma
                </a>
            </button>

            <button>
                <a href='https://github.com/Olecksa/Earth_Hero.git'>
                    View in Github
                </a>
            </button>
        </div>
        

        

        </div>
    )



 }

 export default Card