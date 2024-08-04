import React from 'react';

import cardPhoto from '../images/homepage_photo.png'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div class="card text-bg-dark border-0" style={{ paddingTop: '120px' }}>
                <img src={cardPhoto} class="card-img" alt="homepage_photo" height={700} style={{ opacity: 0.5 }} />
                <div class="card-img-overlay d-flex flex-column justify-content-center" style={{ paddingTop: '150px' ,alignItems: 'center'}}>
                    <h5 class="card-title display-1 fw-bolder mb-0" >Lusil's Digital Closet</h5>
                    <p class="card-text lead fs-1 fw-bolder">Check Out All Products!</p>
                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;