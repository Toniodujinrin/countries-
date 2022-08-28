import React from 'react';
const Filter = ({handleSubmit, handleChange, currentFilter}) => {
    return (
        <div>
        <div >
         
            <button  onClick={handleChange} value='All' >All</button>
            <button  onClick={handleChange} value = "Asia" >Asia</button>
            <button  onClick={handleChange} value = "Europe">Europe</button>
            <button  onClick={handleChange} value = 'Oceania'>Oceania</button>
            <button  onClick={handleChange} value  = 'Africa'>Africa</button>
            <button  onClick={handleChange} value = 'Americas'>Americas</button>
            <button  onClick={handleChange} value = 'Antarctic'>Antarctic</button>

        
         </div>
         
         </div> 
     );
}
 
export default Filter;