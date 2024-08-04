import React from 'react'

import './sidebarLabel.css';
import InputPrice from './InputPrice';

function Price({ handleChangePrice }) {
    return (
        <>
            <div className='price py-3'>
                <h2 className='price-title fs-4 fw-bolder'> Price </h2>

                <label className='sidebar-label-container'>
                    <input onChange={handleChangePrice} type='radio' value={""} name='test2' defaultChecked/>
                    <span className='checkmark' />
                    All
                </label>

                <InputPrice
                    handleChangePrice={handleChangePrice}
                    value={50}
                    title={'$0 - $50'}
                    name={'test2'} />

                <InputPrice
                    handleChangePrice={handleChangePrice}
                    value={100}
                    title={'$50 - $100'}
                    name={'test2'} />

                <InputPrice
                    handleChangePrice={handleChangePrice}
                    value={150}
                    title={'$100 - $150'}
                    name={'test2'} />

                <InputPrice
                    handleChangePrice={handleChangePrice}
                    value={200}
                    title={'Over $150'}
                    name={'test2'} />

            </div>
        </>

    )
}

export default Price;