import React from 'react';
const Filter = () => {
    return (
        <div>
        <form on onSubmit={handleSubmit}>
         <select name = "dropdown">
            <option value = "Computer Architecture" selected>Computer Architecture</option>
            <option value = "Java">Java</option>
            <option value = "Discrete Mathematics">Discrete Mathematics</option>
         </select>
         </form>
         
         </div> 
     );
}
 
export default Filter;