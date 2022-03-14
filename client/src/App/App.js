import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouting from '../Routes/AppRouting';
import { BrowserRouter } from 'react-router-dom'
function App(){
  return (

    <BrowserRouter>
        <AppRouting />
    </BrowserRouter>
   
  );
}
export default App;
