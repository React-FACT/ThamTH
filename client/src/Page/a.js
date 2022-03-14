import React , { useState } from 'react';
import B from './b';
import Login from './login';
function A(props){
    const [tam, setTam] = useState([{ id:"",  name:""   }]); // tham da hieu
    const [a, setA] = useState(false);
    const onchangetext =()=>{

        
       console.log(tam.name)
        
    }

    const oninput =(event)=>{
       
        setTam({
            id:1,
            name:event.target.value
        })
    }
    const changeh1 = ()=>{
        setA(!a) 

    }
     
  return (

    <div>
       {a===true ? <Login/>:""}
        {/* {tam.id}
        {tam.name} */}


    <div> 
    <button onClick={changeh1}>buttonform</button>


<input placeholder='name' onChange={oninput} ></input>

        <button onClick={onchangetext}>button</button>
       
         {/* <h1>{tam}</h1> */}
    </div>
    <div>
        <B name= "quan jean" type ="dai" color="xanh" size="L"> quan ao 1</B>
        <B name= " quan bo" type ="ngan" color="trang" size="xL">quan ao 2</B>
        <B name= " ao" type ="dai" color="do" size="xxL">quan ao 3</B>
    </div>

    </div>
  );
}
export default A;
