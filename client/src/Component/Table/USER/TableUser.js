import React,{ useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {loadUsers} from "../../../redux/actions";
import { Form } from 'react-bootstrap';
import Moment from 'react-moment';
// import Modal from './Modal';


function TableUser(props) {
    const [modalShow, setModalShow] = React.useState(false);
       

    useEffect(()=>{
    props.loadUsers();
},[])
 
 const list = props.data.map((value)=>
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.userName}</td>
                            <td>{value.lastName+ ' '+ value.firstName}</td>
                            <td>{value.email}</td>
                            <td><Moment format ='YYYY/MM/DD'>{value.birthDate}</Moment></td>
                            <td><Moment format ='YYYY/MM/DD'>{value.firstLoginDate}</Moment></td>
                            <td><Moment format ='YYYY/MM/DD'>{value.lastLoginDate}</Moment></td>
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
                <table className="table table-listuser table-hover table-striped" >
                    <thead>
                        <tr className='tr-thead'>
                                <th rowSpan="2" >STT</th>
                                <th  rowSpan="2">UserID</th>
                                <th  rowSpan="2">Fullname</th>
                                <th  rowSpan="2">Email</th>
                                <th  rowSpan="2">Birthdate</th>
                                <th  className="th1" colSpan="2">Activity Date </th>
                                <th  rowSpan="2">Admin</th>
                                <th  rowSpan="2">Status</th>
                                <th className="th2"  rowSpan="2" colSpan="3">
                                <button className='btn btn-success  btn-add' title='Add User' 
                                        onClick={() =>
                                        this.setState({ ...this.state, showModal: true })
                                        }
                                >
                        <i className="bi bi-plus-circle-fill"></i> 
                      </button>

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
                            <tr className="tfoot-tr">
                                <th className="td1-tfoot" colSpan="8">Tổng số đang active</th>
                                <th className="td2-tfoot" colSpan="4" id="tong" >4</th>   
                            </tr>
                        </tfoot>
                </table>
            </div>
            {/* <div>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            </div> */}
        </div>     
        );
    }
//}

const mapStateToProps = state => ({
    data: state.reduxThunk.data,
    loading: state.reduxThunk.loading,
    error: state.reduxThunk.error,
});

const mapDispatchToProps = {
    loadUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableUser);
