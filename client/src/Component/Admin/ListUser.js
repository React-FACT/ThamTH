import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Layout/Header';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
import './ListUser.css';
import Modal from './Modal';
function ListUser() {
    const [user, setUser] = useState([]); //state
  
    const getUser =()=>{
        axios.get(`http://localhost:3300/api/v1/user/get-all`,{
            headers: {
              'Access-Control-Allow-Origin': '*' //cross
            }} ) 
             .then(res => {
            const people = res.data; //get du lieu cho people
           
            setUser(people); //đẩy dữ liệu people vào user
          })
          .catch(error => console.log(error)); // bao loi
    }
  
    useEffect(() => {  // giong nhu hàm khởi tạo 
        console.log("useEffect")
        getUser() // gọ hàm get dữ liệu
      },[]);

        const list = user.map((value)=>
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.userName}</td>
                            <td>{value.lastName+ ' '+ value.firstName}</td>
                            <td>{value.email}</td>
                            <td>{value.birthDate}</td>
                            <td>{value.firstLoginDate}</td>
                            <td>{value.lastLoginDate}</td>
                            <td className="checkbox-tbody"> <Form.Check
                                checked={value['admin'] === 1 ? true : false}
                                readOnly
                            /></td>
                            <td className="radio-tbody"> <Form.Check
                                type='radio'
                                checked={value['status'] === 0 ? true : false}
                                readOnly
                                /> 
                            </td>
                            <td>
                           

                                <button className='btn btn-info'>
                                    <i className="bi bi-eye"></i>
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-warning'>
                                    <i className="bi bi-pencil"></i>
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-danger'>
                                <i className="bi bi-trash3"></i>
                                </button>
                            </td>
                        </tr>
                    )



    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <table className="table table-listuser table-hover table-striped" >
                    <thead>
                        <tr className='tr-thead'>
                                <th rowSpan="2" >STT</th>
                                <th  rowspan="2">UserID</th>
                                <th  rowSpan="2">Fullname</th>
                                <th  rowSpan="2">Email</th>
                                <th  rowSpan="2">Birthdate</th>
                                <th  className="th1" colspan="2">Activity Date </th>
                                <th  rowSpan="2">Admin</th>
                                <th  rowSpan="2">Status</th>
                                <th className="th2"  rowSpan="2" colSpan="3">
                                    <button className='btn btn-add'  data-toggle="modal" data-target="#exampleModalCenter" href="#"><i className="bi bi-plus-circle-fill"></i> </button>
                                </th>
                        </tr>
                        <tr >
                                <th >First login date</th>
                                <th >Last login date</th>
                            </tr>
                    </thead>
                    <tbody>
                                
                        {list}

                        
                    </tbody>
                    <tfoot className='tfoot-table'>
                            <tr clasclassNames="tfoot-tr">
                                <th claclassNamess="td1-tfoot" colSpan="8">Tổng số đang active</th>
                                <th claclassNamess="td2-tfoot" colSpan="4" id="tong" >4</th>   
                            </tr>
                        </tfoot>
                </table>
            </div> 
           
        </div>  
    )
    
 
    
}
export default ListUser;