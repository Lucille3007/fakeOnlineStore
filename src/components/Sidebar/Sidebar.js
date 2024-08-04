import React from 'react'
import './Sidebar.css';
import Price from './Price'
import Use from './Use'


function Sidebar({handleChangePrice, handleChangeUse}) {
    return (
        <>

            <div className='sidebar py-3 bg-body-tertiary' >
                <div className='sidebar-title fs-2 fw-bolder py-3'>Filter</div>

                <Price handleChangePrice={handleChangePrice}/>
                <Use handleChangeUse={handleChangeUse}/>
            </div>

        </>
    )
}

export default Sidebar;