import React,{useEffect, useState} from 'react';
import Card from './common/card';
const ListCountries = ({countries,theme,searched}) => {
  const[newCountries,setNewCountries]=useState([])
  useEffect(()=>{
    if(newCountries.length !== 0){
    let newCountries = countries.filter(country => country.name.common.toLowerCase().startsWith(searched));
  
    setNewCountries(newCountries)
    }
    else setNewCountries(countries)

  },[searched])
  
   
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