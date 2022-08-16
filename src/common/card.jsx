import React from 'react';
import {Link} from 'react-router-dom'
const Card = (props) => {
const {name,region,population,flag,capital,theme}=props
    return (  
        
            <Link to={`/details/${name}`} id='link'>
             <div id='card' className={(theme)?'secondary-light':'secondary-dark'}>
              <div id='image'><img src={flag} alt="" /></div>
              <div id='info'>
                <div>
                <h2 id='country-name'>{name}</h2>
                </div>
                <div id='details'>
                <div>
                <p id='population'>{`Population: ${population}`}</p>
                </div>
                <div>
                <p id='region'>{`Region: ${region}`}</p>
                </div>
                <div>
                <p id='capital'>{`capital: ${capital}`}</p>
                </div>
                </div>
                </div>  
            </div>
            </Link>
        

    );
}
 
export default Card;