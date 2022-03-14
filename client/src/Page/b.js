import React,  { useEffect } from 'react';
import C from './c';
const  B = (props)=>{

useEffect(() => {
      console.log(props.name); // đưa prop. cái j đó vào
},[]);


  return (
 
      <div>
        <C name1={props.name} type1={props.type} color1={props.color} size1= {props.size}> <b>Name</b></C>
      </div>
   
  );
}
export default B;
