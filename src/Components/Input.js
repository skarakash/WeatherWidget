import React from 'react';

const Input = ({onInputChange}) => {
     return (
        <div className="inputWrapper">
            <input onChange={onInputChange}
                   type='search'
                   placeholder='City'
            />
        </div>
    )
};

export default Input;