import React,{useEffect, useState} from 'react';
import Card from './common/card';
const ListCountries = ({countries,theme,searched,currentFilter}) => {
  const[filteredCountries,setNewFiltered]=useState(countries)
  const[newCountries,setNewCountries]=useState(countries)
  useEffect(()=>{
    
    const newFiltered= countries.filter(country=> country.region===currentFilter)
    if(newFiltered.length !== 0) setNewFiltered(newFiltered)
    else setNewFiltered(countries);
    
    const newCountry = filteredCountries.filter(country => country.name.common.toLowerCase().startsWith(searched));
    if(newCountry.length !== 0){
     setNewCountries(newCountry)
    }
    else setNewCountries(filteredCountries);

    console.log(filteredCountries)

  },[currentFilter,searched])
  
   
  let countryList =[]

   if(newCountries.length === 0){
    countryList =[...countries]
   }
   else countryList=[...newCountries]
   
   if(countryList.length>8)countryList.splice(8,(countryList.length-8))
   
    return ( 
       <div className={(theme)?'primary-light':'primary-dark'}>
        {
            (countryList[0]&& countryList.length>0)?  
            
          <div id='list'>
            {
              
              countryList.map(country=><div key={country.name.official}>{<Card name={country.name.common} population={country.population} region={country.region} capital={(country.capital)?country.capital[0]:'no capital'} flag={country.flags.svg} theme={theme} />}</div>)
             
            
            }
          </div>:
          <div></div>
        }
        
       </div>
     
     );
}
 
export default ListCountries;