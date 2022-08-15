import React from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

const Details = () => {
    
    const params= useParams();
    
    return (  
        <h1>{`Details ${params.id}`}</h1>
    );
}
 
export default Details ;