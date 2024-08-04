import React from 'react'

import './sidebarLabel.css';
import InputUse from './InputUse';

function Use({ handleChangeUse }) {
    return (
        <>
            <div className='use py-3'>
                <h2 className='use-title fs-4 fw-bolder'> Use </h2>

                <label className='sidebar-label-container'>
                    <input onChange={handleChangeUse} type='radio' value={""} name='test' defaultChecked />
                    <span className='checkmark' />
                    All
                </label>

                <InputUse
                    handleChangeUse={handleChangeUse}
                    value={'casual'}
                    title={'Casual'}
                    name={'test'} />

                <InputUse
                    handleChangeUse={handleChangeUse}
                    value={'gift'}
                    title={'Gift'}
                    name={'test'} />

                <InputUse
                    handleChangeUse={handleChangeUse}
                    value={'gaming'}
                    title={'Gaming'}
                    name={'test'} />
            </div>
        </>

    )
}

export default Use;