import React from 'react';
import './Register.css';
import $ from 'jquery';
import { useFormik } from 'formik';
import axios from 'axios';

export default function Register() {
let user={
    name:"",
    email:"",
    phone:"",
}
async function getUserData(info){
try {
    let{data}=await axios.post('http://upskilling-egypt.com:3001/contact',info)
console.log(data)

} catch (err) {

    $('errMsg').fadeIn(1000,function(){
        setTimeout(()=>{
$('errMsg').fadeOut(1000)
        },3000)
    })
}
}

let myFormik=useFormik({
    initialValues:user,

    onSubmit:function(values){
        getUserData(values);
    },
    

    validate:function(values){
        const errors = {};
      
        if (values.name.length<3||values.name.length>10) {
          errors.name = 'Name is required';
        }
      
        if (!values.phone.match(/^01[0152][0-9]{8}$/)) {
          errors.phone = 'Phone number is required';
        }
      
        if (!values.email.includes('@')||values.email.includes('.com ')) {
          errors.email = 'Email is required';
        }
      
        return errors;
}})
  return (
    <>
    <div className='contact pt-5'>
<h2>CONTACT US</h2>
    </div>
    <div style={{'display':'none'}} className='alert alert-danger text-center'>email already exist</div>
    <div className='container w-75 m-auto text-center'>
        <div className='row gy-4'>
            <div className='col-md-6'>
                <div className='item'>
                <form onSubmit={myFormik.handleSubmit}>
 <label htmlFor="name"></label>
 <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.name} type="text" className='form-control ' id='name'placeholder='name' />
{myFormik.errors.name&&myFormik.touched.name?<div className='text-danger'>{myFormik.errors.name}</div>:""}

 <label htmlFor="email"></label>
 <input type="email" onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.email} className='form-control ' id='email' placeholder='email' />
 {myFormik.errors.email&&myFormik.touched.email?<div className='text-danger'>{myFormik.errors.email}</div>:""}

 <label htmlFor="phone"></label>
 <input type="text" onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.phone} className='form-control' id='phone' placeholder='phone' />
{myFormik.errors.phone&&myFormik.touched.phone?<div className='text-danger'>{myFormik.errors.phone}</div>:""}
 
 <button type='submit' className='rounded-button  mt-3 '>Register</button>
    </form>
                </div>
            </div>
            <div className='col-md-6'>
          <div className='p-5'>
          <i className="fa-regular fa-envelope 3px "></i> <span>test@gmail.com</span>
          <br/>
          <i className="fa-solid fa-phone 3px"></i> 0111551215
          </div>
            </div>         
        </div>
   
    </div>
 
    </>
  )
}
