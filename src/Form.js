import React from 'react'
import "./App.css"
import styled from 'styled-components'
const But=styled.button`

background-color:black;
color:white;
cursor:pointer;
padding:8px 13px;
border:1px solid wheat;
border-radius:8px;
background-color:#9b150b;
`;
let inp={
padding: "9px",
borderRadius: "20px",
outline: "none",
border: "none",
backgroundColor:"wheat",
width: "68%",
marginBottom: "16px",
fontWeight:"bold",
}

export default function Form(props) {
  return (
    <div  >
      <form onSubmit={props.submit}>
      <input style={inp}  name="city"type="text" placeholder="write city" />
      
      <input style={inp} name="country" type="text" placeholder="write country" />
<div>

<But>Get Weather</But>

</div>

      </form>


    </div>
  )
}
