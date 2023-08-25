import React, { Component } from 'react'
import  styles from"./List.module.css"



export default class List extends Component {
  render() {
    const{city,country,temp,hum,description,error,icon}=this.props
    console.log(icon)
    return (
      <div className={styles.all}>
     {icon?<img style={{ width:"100px",height:"100px", background: "wheat",
     marginTop: "20px", borderRadius: "50%" }} src={`http://openweathermap.org/img/w/${icon}.png`}  alt=''/>:""}

  
      {this.props.city&& <div><p>  Location: </p> {city},{country} </div>}
{    temp&&  <div><p>Temperature : </p> {temp}</div>
}  
{    hum&&  <div><p> Humidity : </p> {hum} </div>
}    


{description&&  <div> <p> description : </p> {description}</div>
}   
{   error&&<div>{error}</div>
} 
  </div>
    )
  
  }
}
