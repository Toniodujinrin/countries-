import React from 'react';
const Card = (props) => {
const {name,region,population,flag,capital}=props
    return (  
        
            <div id='card'>
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
        

    );
}
 
export default Card;