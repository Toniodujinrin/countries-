import React, { Component } from 'react';
import Home from './HomePage';
import {Route,Routes} from 'react-router-dom'
import Details from './DetailsPage';
import NotFound from './NotFound';
import Title from './TitleBar';
class App extends Component {
  state = { 
    darkMode:true
   } 
    handleTheme=()=>{
    const darkMode= this.state.darkMode
    this.setState({darkMode:!darkMode})
    if(this.state.darkMode){
      document.body.style.backgroundColor='hsl(207, 26%, 17%)'
    }
    else document.body.style.backgroundColor='hsl(0, 0%, 98%)'
   }
  
  render() { 
    const {darkMode}=this.state
    return (
      <div id='main'>
      <Title id='nav' handleTheme={this.handleTheme} theme={this.state.darkMode}/>
      <div id='core-content'>
        <Routes>
       <Route path='/' element={<Home theme={darkMode}/>}/>
       <Route path='details/:id' element={<Details theme={darkMode}/>}/>
       <Route path='*' element={<NotFound theme={darkMode}/>}/>
        </Routes>
      </div>
      </div>
    );
  }
}
 
export default App;