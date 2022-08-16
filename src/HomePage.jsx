import React, { Component } from 'react';
import axios from 'axios';
import ListCountries from './listOfCountries';
class Home extends Component {
    state = { 

        countires: []

     }
    async componentDidMount(){
        const {data}= await axios.get('https://restcountries.com/v3.1/all')
        

        this.setState({countires:data})

        console.log(data)
    }
     
    render() { 
        return (
            <ListCountries theme={this.props.theme} countries={this.state.countires}/>
        );
    }
}
 
export default Home;