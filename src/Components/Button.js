import React from 'react';

const Button = ({searchField}) => {
    return (
        <div className="buttonWrapper">
            <button type="submit"
            disabled={searchField === ""}>Search</button>
        </div>
    )
};

export default Button;