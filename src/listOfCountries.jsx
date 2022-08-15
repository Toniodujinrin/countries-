import React from 'react';
import Card from './common/card';
const ListCountries = ({countries}) => {

    
   countries.splice(9,(countries.length-9))
   console.log(countries)
    return ( 
       <div>
        {
            (countries.length>0)?  
            
          <h1>
            {
             <Card/>
            
            }
          </h1>:
          <div></div>
        }
        
       </div>
     
     );
}
 
export default ListCountries;