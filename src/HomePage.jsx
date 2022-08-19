import React, { Component } from 'react';
import axios from 'axios';
import ListCountries from './listOfCountries';
import Search from './common/searchBar';
class Home extends Component {
    state = { 
        searched:'',
        countires: []

     }
    async componentDidMount(){
        const {data}= await axios.get('https://restcountries.com/v3.1/all')
        

        this.setState({countires:data})
        
        
    }
    handleSearch=({currentTarget:input})=>{
        this.setState({searched:input.value})

    }
     
    render() { 
        const{searched}=this.state
        return (
            <React.Fragment>
            <Search searched={searched} handleSearch={this.handleSearch}/>
            <ListCountries theme={this.props.theme} countries={this.state.countires} searched={searched}/>
            </React.Fragment>
        );
    }
}
 
export default Home;