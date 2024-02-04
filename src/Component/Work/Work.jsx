import React from 'react'
import './Work.css'
export default function Work() {
  return (
    <>
    <div className='pt-5 work'>
        <div className="container w-75 m-auto">
            <div className="row gy-4">
                <div className="col-md-6">
                    <p style={{'color':' #ffca08'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                </div>
                <div className='col-md-6'>
                    <h3 style={{'color':'#FFFFFF' ,'fontSize':'50px'}}>HOW WE <br/>WORK</h3>
                </div>
            </div>
        </div>
        <div className='container pt-5 w-75 m-auto'>
<div className='row gy-4'>
<div className='col-md-3 rounded-4'>
    <img src={require('../../assets/work1.png')} className='w-100' alt="meals"/>
</div>
<div className='col-md-3 rounded-4'>
    <img src={require('../../assets/work2.png')} className='w-100' alt="meals"/>
</div>
<div className='col-md-3 rounded-4'>
    <img src={require('../../assets/work3.png')} className='w-100' alt="meals"/>
</div>
<div className='col-md-3 rounded-4'>
    <img src={require('../../assets/work4.png')} className='w-100' alt="meals"/>
</div>
</div>
        </div>
        <div className='text-center'><button type='submit' className='btn btn-outline-primary  m-3 '>Register</button></div>

    </div>
    </>
  )
}
