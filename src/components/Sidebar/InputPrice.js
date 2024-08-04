
function InputPrice({handleChangePrice, value, title, name}) {
    return (
        <label className='sidebar-label-container'>
            <input onChange={handleChangePrice} type='radio' value={value} name={name} />
            <span className='checkmark' />
            {title}
        </label>
    );
}

export default InputPrice;
