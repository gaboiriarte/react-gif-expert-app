import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        // console.log(e.target.value); -> este es valor que tiene la caja del input
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); //esto evita que al apretar enter se refresque por completo la pagina

        if(inputValue.trim().length > 2){
            // console.log('Submit hecho');
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}></input>
        </form>      
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
