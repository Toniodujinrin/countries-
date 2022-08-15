import React, { Component } from 'react';
import Home from './HomePage';
import {Route,Routes} from 'react-router-dom'
import Details from './DetailsPage';
import NotFound from './NotFound';
class App extends Component {
  state = {  } 
  
  
  render() { 
    return (
      <div>
        <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='details/:id' element={<Details/>}/>
       <Route path='*' element={<NotFound/>}/>
       
       </Routes>
      </div>
    );
  }
}
 
export default App;