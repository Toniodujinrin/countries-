import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Details = ({theme}) => {
    
    const params= useParams();
    const name = params.id;
    const [country,setCountry]=useState('')
    const [border,setBorder]= useState('')
    useEffect(()=>{
        async function getCountry(Type,Name,url){
            
            const {data}=await axios.get(`${url}${Name}`)
            Type(data[0])
            
        }
 
        try {
          if(name.length>3) getCountry(setCountry,name,'https://restcountries.com/v3.1/name/')
          else getCountry(setCountry,name,'https://restcountries.com/v3.1/alpha/')
                
        } catch (error) {
            if(error.response&&error.response.status===404){
                window.alert('country not found')
            }
            else{
                window.alert('check connection')
                console.log(error)
            }
            
            
        }

       
        
    },[name])

    function getLanguages(object){
        let array=[];
        for(let keys in object){
            let key = object[keys];
            array.push(key);

        };
        
        return array.toString();
    }
    function getCurrencies(object,name){
       return object[Object.keys(object)[0]].name
    }

    

    
    return ( 
        <div className={(theme)?'primary-light':'primary-dark'}>{
            (country)?
    <div id='details-page'>
        <div>
            <button>
                Back
            </button>
        </div>
        <div id='details'>
            <div id='flag-container'><img id='flag'src={country.flags.svg} alt="" /></div>
            <div id='information' >
                <div id='country-Name'>{country.name.common}</div>
                <div id='data'>
                    <div>

                        <div className='fact'><span className='fact-header' >{'Native Name:'}</span><span>{` ${country.name.common}`}</span></div>
                        <div className='fact'><span className='fact-header'>{`Population:`}</span><span>{` ${country.population}`}</span></div>
                        <div className='fact'><span className='fact-header'>{`Region:`}</span><span>{` ${country.region}`}</span></div>
                        <div className='fact'><span className='fact-header'>{`Sub-Region:`}</span><span>{` ${country.subregion}`}</span></div>
                        <div className='fact'><span className='fact-header'>{`Capital:`}</span><span>{` ${country.capital[0]}`}</span></div>
                    </div>
                    <div>
                        <div className='fact'><span className='fact-header'>{`Top Level Domain:`}</span><span>{` ${country.tld[0]}`}</span></div>
                        <div className='fact'><span className='fact-header'>{`Currencies: `}</span><span>{`  ${getCurrencies(country.currencies,name)}`}</span></div>
                        <div className='fact'><span className='fact-header'>{`Languages:  `}</span><span>{` ${getLanguages(country.languages)} `}</span></div>
                    </div>
                </div>
                <div id='border'>
                    <div>
                    Border Land:
                    </div>

                    <div>
                    {
                      
                      (country.borders)?
                      <ul id='border-list'>{
                      country.borders.map(borderCountry=> 
                     
                      <Link id='link' to={`/details/${borderCountry}`}><li id='border-country'>{borderCountry}</li></Link>

                      
                      )
                      }</ul>:
                      <div></div>
                    }
                    </div>

                </div>

            </div>
        </div>

    </div>:<div></div>

        }</div>
    );
}
 
export default Details ;