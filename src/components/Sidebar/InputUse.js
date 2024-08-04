
function InputUse({handleChangeUse, value, title, name}) {
    return (
        <label className='sidebar-label-container'>
            <input onChange={handleChangeUse} type='radio' value={value} name={name} />
            <span className='checkmark' />
            {title}
        </label>
    );
}

export default InputUse;
