// let apikey="fe4feefa8543e06d4f3c66d92c61b69c"
// let city=e.target.elements[0].value
// axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
  // let key="4f499d83717e0c49748c20e595f6035f"


import React, { Component } from 'react'
import "./App.css"
import List from './List'
import Form from './Form'
// import axios from 'axios'
export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    
city:"", country:"",temp:"",hum:"",condition:"",error:"",icon:""

     
  }
}
submit= async(e)=>{
e.preventDefault()

 let city=e.target.elements.city.value
  let country=e.target.elements.country.value
try{
let api= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`)
let data= await api.json()
console.log(data)
if(api.ok){ 
     this.setState({
  icon: data.weather[0].icon,
  city:data.name, country:data.sys.country,temp:data.main.temp,hum:data.main.humidity,description:data.weather[0].description,error:""
 })
}
   else{ this.setState ({

    city:"", country:"",temp:"",hum:"",description:"",error:"sure that your fields full with valid data",
      icon:"" })
  
   } 
  }
    
      
      catch(error) {

        console.error(error);
      }

    


}


render() {
    return (
      <div   style={{background: "black",
      padding: "20px"}} className='App'>
        <p className='ford'>Weather App</p>
        <Form  
      
          submit={this.submit} 
        />
<List       
city={this.state.city}
 country={this.state.country}
 temp={this.state.temp}
 hum={this.state.hum}
 description={this.state.description}
 error={this.state.error}
icon={this.state.icon}
/>


      
      </div>
    )
  }

}