import React from 'react';
import Card from './common/card';
const ListCountries = ({countries}) => {

    
   countries.splice(8,(countries.length-8))
   console.log(countries)
    return ( 
       <div>
        {
            (countries.length>0)?  
            
          <div id='list'>
            {
              
              countries.map(country=><div key={country.name.official}>{<Card name={country.name.common} population={country.population} region={country.region} capital={country.capital[0]} flag={country.flags.svg} />}</div>)
             
            
            }
          </div>:
          <div></div>
        }
        
       </div>
     
     );
}
 
export default ListCountries;